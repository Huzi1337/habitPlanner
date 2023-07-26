import { useState } from "react";

const TimePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");

  const isOpenHandler = () => setIsOpen((previous) => !previous);
  return (
    <>
      <button onClick={isOpenHandler}></button>
      {isOpen && <div></div>}
      <input type="hidden"></input>
    </>
  );
};

export default TimePicker;
