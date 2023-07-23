import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Home from "./components/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
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
