import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Navbar from "./components/navbar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

    </React.Fragment>
  )
);
function App() {
  return (
    <div className="App flex justify-center items-center">
      <div className="max-w-[1440px]" >
        <div>
          <Navbar />
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        </div>

      </div>
    </div>
  );
}

export default App;
