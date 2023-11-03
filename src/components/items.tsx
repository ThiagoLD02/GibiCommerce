import { useEffect, useState } from "react";
import { Comic, GetRequest } from "../service/getRequest";

export function Items() {
  const [comics, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    const comicsPromise = GetRequest("comics");
    Promise.all([comicsPromise]).then((response) => {
      if (response) {
        setComics(response[0].data.results);
      }
    });
  }, []);

  return (
    <>
      {comics
        ? comics.map((comic) => {
            return comic.title;
          })
        : ""}
    </>
  );
}
