import { useEffect, useRef, useState } from "react";
import { Comic, GetRequest } from "../service/getRequest";
import { Product } from "./product";
import { Arrow } from "../assets/arrow";

export function Items() {
  const [comics, setComics] = useState<Comic[]>([]);
  const [pages, setPages] = useState([1, 2, 3, 4]);
  const selectedPage = useRef(1);
  const loading = useRef(true);

  function getData(offset: number = 0) {
    loading.current = true;
    const comicsPromise = GetRequest("comics", offset);
    Promise.all([comicsPromise]).then((response) => {
      if (response) {
        setComics(response[0].data.results);
        loading.current = false;
      }
    });
  }

  useEffect(() => {
    getData(0);
  }, []);

  function handlePaginationClick(number: number) {
    selectedPage.current = number;
    setPages((oldState) => {
      const updated = oldState.map((val, index) => {
        if (index === 0) return number;
        else return number + index;
      });
      return updated;
    });
    getData((number - 1) * 24);
  }

  function handleLeftClick() {
    if (pages[0] !== 1) setPages((oldState) => oldState.map((val) => val - 1));
  }

  return (
    <div className="h-fit">
      <header className="flex flex-col items-center gap-1">
        <h4>Search Item</h4>
        <input
          type="text"
          name="searchItems"
          id="searchItems"
          placeholder="Search items"
          className="py-2 px-4 w-2/4 rounded-xl"
        />
      </header>
      <main className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 mt-5 gap-y-8 gap-x-5  h-[85vh] max-w-[1500px] 2xl:m-auto pb-5 overflow-auto">
        {loading.current
          ? "Loading..."
          : comics.map((comic) => (
              <Product
                key={comic.id}
                price={comic.prices[0].price}
                title={comic.title}
                imgData={comic.images[0]}
              />
            ))}
      </main>
      <div className="flex justify-center items-center mt-5 mx-auto gap-5">
        <button onClick={handleLeftClick}>
          <Arrow />
        </button>
        {pages.map((page) => {
          return (
            <button
              key={page}
              onClick={() => handlePaginationClick(page)}
              className="p-2 rounded-full text-xl"
              style={{
                backgroundColor:
                  selectedPage.current === page
                    ? "var(--color-success)"
                    : "white",
              }}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}
