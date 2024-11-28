import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Phones from "./components/Phones.jsx";
import Main from "./components/Main.jsx";
import Phone from "./components/Phone.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/phones",
        element: <Phones></Phones>,
        loader: () => fetch("http://localhost:5000/phones"),
      },
      {
        path: "/phone/:id",
        element: <Phone></Phone>,
        loader: ({ params }) => fetch(`http://localhost:5000/phones/${params.id}`),
      },
    ],
  },
]);
  
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
