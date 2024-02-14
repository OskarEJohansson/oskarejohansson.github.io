import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HeaderComponent from "./HeaderComponent";
import "./style.css";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HeaderComponent />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
