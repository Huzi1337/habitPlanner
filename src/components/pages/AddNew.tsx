import { DatePickerInput } from "@mantine/dates";
import { useLocation, useNavigate } from "react-router-dom";

import "./AddNew.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import { useForm } from "@mantine/form";
import { useState } from "react";
import TimePicker from "../TimePicker";
import { ITask } from "../../types/reducers";
import { addTask } from "../../store/reducers/taskReducer";
import dayjs from "dayjs";

const AddNew = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tasks } = useSelector((state: RootState) => state.task);

  const [category, setCategory] = useState("");

  const form = useForm<ITask>({
    initialValues: {
      id: tasks.length,
      title: "",
      tag: "",
      date: null,
      time: "",
      note: "",
      isCheckedOff: false,
    },
    validate: {
      tag: (value) => (value.length > 0 ? null : "Choose a tag!"),
      date: (value) => (value ? null : "Pick a date!"),
      title: (value) => (value.length > 0 ? null : "Choose a title!"),
      time: (value, values) =>
        value.length > 0
          ? tasks.some(
              ({ date }) =>
                dayjs(date).format("HH:mm") === value &&
                dayjs(date).isSame(values.date, "date")
            )
            ? "You already have a task scheduled at this time."
            : null
          : "Pick a time!",
    },
  });
  const setCategoryHandler = (tag: string) => {
    setCategory((prev) => {
      const isSame = prev === tag;
      form.setFieldValue("tag", isSame ? "" : tag);
      return isSame ? "" : tag;
    });
  };

  const submitHandler = () => {
    form.validate();
    if (form.isValid()) {
      const [hours, minutes] = form.values.time.split(":");
      dispatch(
        addTask({
          ...form.values,
          date: dayjs(form.values.date)
            .set("hour", +hours)
            .set("minute", +minutes)
            .toISOString(),
        })
      );
      cancelHandler();
    }
  };

  const cancelHandler = () => {
    navigate(`/${pathname.split("/")[1]}`);
  };

  const categories = useSelector((state: RootState) => state.tag);
  return (
    <>
      <div className="addNew__header">
        <button onClick={cancelHandler}>Cancel</button>
        <h3>Task</h3>
        <button onClick={submitHandler} className="addNew__header__colored">
          Save
        </button>
      </div>
      <h4 className={`addNew__label ${form.errors.title ? "error" : ""}`}>
        Title
      </h4>
      <input
        {...form.getInputProps("title")}
        className={`addNew__titleInput ${form.errors.title ? "error" : ""}`}
      ></input>
      {form.errors.title && (
        <p className="addNew__error">{form.errors.title}</p>
      )}
      <h4 className={`addNew__label ${form.errors.tag ? "error" : ""}`}>
        Category
      </h4>
      <div className="addNew__categoryContainer">
        {categories.map((tag, index) => (
          <button
            onClick={() => setCategoryHandler(tag)}
            key={index}
            className={`addNew__categoryButton ${
              category === tag ? "active" : ""
            }`}
          >
            {tag}
          </button>
        ))}
        <button className="addNew__categoryButton newCategory">+</button>
      </div>
      <h4 className="addNew__label">Date</h4>
      <DatePickerInput
        {...form.getInputProps("date")}
        icon={<img className="calendar" src="/icons/calendar.svg"></img>}
        rightSection={<img src="/icons/expandDown.svg"></img>}
        size="md"
        placeholder="Pick Date"
        valueFormat="DD/MM/YYYY"
        minDate={new Date()}
      ></DatePickerInput>
      <h4 className="addNew__label">Time</h4>
      <TimePicker form={form}></TimePicker>
      <h4 className="addNew__label">Notes</h4>
      <textarea
        {...form.getInputProps("note")}
        placeholder="Take a note!"
        className="addNew__notes"
      ></textarea>
    </>
  );
};

export default AddNew;
