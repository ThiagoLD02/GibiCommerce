interface ProductProps {
  title: string;
  price: number;
  imgData: {
    path: string;
    extension: string;
  };
}

import { BagAdd } from "../assets/bagAdd";
import emptyImg from "../assets/emptyImg.png";

export function Product({ title, price, imgData }: ProductProps) {
  const img = imgData ? imgData.path + "." + imgData.extension : emptyImg;

  return (
    <main className="grid w-72 h-fit max-h-[500px] p-5 bg-white rounded-xl justify-center text-center m-auto border">
      <div className="w-full">
        <button className="w-fit h-fit">
          <img src={img} width={200} height={300} className="aspect-[2/3]" />
        </button>
        <h3 className="text-lg">{title}</h3>
      </div>
      <div className="flex justify-between items-center pt-4">
        <h3>$ {price}</h3>
        <button>
          <BagAdd />
        </button>
      </div>
    </main>
  );
}
