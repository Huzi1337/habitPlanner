import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Home from "./components/pages/Home";
import RootLayout from "./components/RootLayout";
import Journal from "./components/pages/Journal";
import AddNew from "./components/pages/AddNew";
import Landing from "./components/pages/Landing";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import { setClock } from "./store/reducers/clockReducer";
import { setActiveTask } from "./store/reducers/taskReducer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { path: "/", element: <Landing></Landing> },

      { path: "/home", element: <Home></Home> },
      { path: "/journal", element: <Journal></Journal> },
      {
        path: "/home/addNew/:activity",
        element: <AddNew></AddNew>,
      },
      {
        path: "/journal/addNew/:activity",
        element: <AddNew></AddNew>,
      },
    ],
  },
]);

function App() {
  const timeoutRef = useRef<number | undefined>(undefined);
  const dispatch = useDispatch();

  const updateCurrentDate = () => {
    const currentTime = dayjs();
    dispatch(setClock(currentTime.toISOString()));
    dispatch(setActiveTask());

    const msUntilNextMinute = 60000 - currentTime.second() * 1000;
    timeoutRef.current = setTimeout(updateCurrentDate, msUntilNextMinute);
  };

  useEffect(() => {
    updateCurrentDate();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  return (
    <div className="phone__borderOuter2">
      <div className="phone__borderOuter">
        <div className="phone__borderInner2">
          <div className="phone__borderInner">
            <div className="appScreen">
              <RouterProvider router={router}></RouterProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
