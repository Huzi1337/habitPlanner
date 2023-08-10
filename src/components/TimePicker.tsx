import { useEffect, useRef, useState } from "react";

import ScrollContainer from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

import "./TimePicker.scss";

import useClickOutside from "../hooks/useClickOutside";
import { UseFormReturnType } from "@mantine/form";
import { ITask, ValidTime } from "../types/reducers";

const hours = Array.from({ length: 24 }, (_, index) => index + "");
const minutes = Array.from({ length: 60 }, (_, index) =>
  index < 10 ? "0" + index : index + ""
);

type Props = { form: UseFormReturnType<ITask> };

const TimePicker = ({
  form,
  form: {
    errors: { time: timeFieldError },
  },
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");
  const [minute, setMinute] = useState<string>("30");
  const [hour, setHour] = useState<string>("12");

  const setMinuteHandler = (value: string) => setMinute(value);
  const setHourHandler = (value: string) => setHour(value);

  const isOpenHandler = () =>
    setIsOpen((previous) => {
      return !previous;
    });

  const setTimeHandler = () => {
    const chosenTime = `${hour}:${minute}`;
    form.setFieldValue("time", chosenTime as ValidTime);
    setTime(chosenTime);
    isOpenHandler();
  };
  const timePickerRef = useRef(null);

  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hourRef.current && minuteRef.current) {
      const hourHeight = hourRef.current.offsetHeight / 2;
      const minuteHeight = minuteRef.current.offsetHeight / 2;

      hourRef.current.scrollTop =
        hourRef.current.scrollHeight / 2 - hourHeight + 10;
      minuteRef.current.scrollTop =
        minuteRef.current.scrollHeight / 2 - minuteHeight + 10;
    }
  }, [isOpen]);

  useClickOutside(timePickerRef, () => {
    setIsOpen(false);
  });
  return (
    <>
      <button
        className={`timePicker__root ${
          time.length === 0 ? "placeholder" : ""
        } ${timeFieldError ? "error" : ""}`}
        onClick={isOpenHandler}
      >
        <div className="timePicker__leftIcon">
          <img src="/icons/clock.svg"></img>
        </div>
        {time.length > 0 ? time : "Pick Time"}

        <div className="timePicker__rightIcon">
          <img src="/icons/expandDown.svg"></img>
        </div>
      </button>
      {timeFieldError ? (
        <p className="timePicker__error">{timeFieldError}</p>
      ) : null}
      {isOpen && (
        <div ref={timePickerRef} className="timePicker__wrapper">
          <div className="timePicker__inputs">
            <ScrollContainer ref={hourRef as any} className="timePicker__hour">
              {hours.map((value, index) => (
                <button
                  onClick={() => setHourHandler(value)}
                  key={index}
                  className={`timePicker__item ${
                    hour === value ? "active" : ""
                  }`}
                >
                  {value}
                </button>
              ))}
            </ScrollContainer>
            <div className="timePicker__separator">
              <span>:</span>
            </div>
            <ScrollContainer
              ref={minuteRef as any}
              id="minutePicker"
              className="timePicker__minute"
            >
              {minutes.map((value, index) => (
                <button
                  onClick={() => setMinuteHandler(value)}
                  key={index}
                  className={`timePicker__item ${
                    minute === value ? "active" : ""
                  }`}
                >
                  {value}
                </button>
              ))}
            </ScrollContainer>
          </div>
          <div className="timePicker__buttonContainer">
            <button className="timePicker__cancel" onClick={isOpenHandler}>
              Cancel
            </button>
            <button className="timePicker__done" onClick={setTimeHandler}>
              Done
            </button>
          </div>
        </div>
      )}
      <input type="hidden"></input>
    </>
  );
};

export default TimePicker;
