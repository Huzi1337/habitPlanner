import { Notification as MantineNotification } from "@mantine/core";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import dayjs from "dayjs";

import "./Notification.scss";

const Notification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [timeoutId, setTimeoutId] = useState<null | number>(null);
  const { tasks } = useSelector((state: RootState) => state.task);

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return;
    }

    setIsVisible(true);
    const id = setTimeout(() => setIsVisible(false), 5000);
    setTimeoutId(id);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [tasks.length]);

  const onCloseHandler = () => {
    setIsVisible(false);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return (
    <>
      {isVisible && (
        <MantineNotification
          onClose={onCloseHandler}
          title="The task has been added!"
        >{`${tasks[tasks.length - 1].title} ${dayjs(
          tasks[tasks.length - 1].date
        ).format("[on] ddd D/M/YY [at] hh:mm")}`}</MantineNotification>
      )}
    </>
  );
};

export default Notification;
