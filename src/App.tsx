import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Home from "./components/pages/Home";
import RootLayout from "./components/RootLayout";
import Journal from "./components/pages/Journal";
import NewResponsibility from "./components/pages/NewResponsibility";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/journal", element: <Journal></Journal> },
      {
        path: "/responsibility",
        element: <NewResponsibility></NewResponsibility>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="appScreen">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
