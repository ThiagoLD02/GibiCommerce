import { Routes, Route } from "react-router-dom";
import { LeftSideBar } from "../components/leftSideBar";
import { BagSideBar } from "../components/bagSideBar";
import { Items } from "../components/items";
import { Product } from "../components/product";

export function HomePage() {
  return (
    <div className="grid grid-cols-[88px_1fr_88px] gap-3 p-[16px] bg-slate-200 w-full h-full ">
      <LeftSideBar />
      <Routes>
        <Route path="*" Component={Items} />
        <Route path="/product" Component={Product} />
      </Routes>
      <BagSideBar />
    </div>
  );
}
