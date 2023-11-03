import { Routes, Route } from "react-router-dom";
import { LeftSideBar } from "../components/leftSideBar";
import { BagSideBar } from "../components/bagSideBar";
import { Items } from "../components/items";
import { Product } from "../components/product";

export function HomePage() {
  return (
    <div className="flex bg-slate-200 w-screen h-screen gap-72 ">
      <LeftSideBar />
      <Routes>
        <Route path="/" Component={Items} />
        <Route path="/product" Component={Product} />
      </Routes>
      <BagSideBar />
    </div>
  );
}
