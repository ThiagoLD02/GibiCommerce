import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/checkout" Component={HomePage} />
    </Routes>
  );
}
