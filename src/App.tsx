import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  );
}
