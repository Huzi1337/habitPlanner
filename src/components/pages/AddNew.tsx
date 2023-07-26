import { TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useParams } from "react-router-dom";

import "./AddNew.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import { useForm } from "@mantine/form";
import dayjs from "dayjs";
import { useState } from "react";

const AddNew = () => {
  const { activity } = useParams();

  const [category, setCategory] = useState("");
  const form = useForm({
    initialValues: {
      title: "",
      category: category,
      date: dayjs().toISOString(),
      time: "",
      note: "",
    },
  });
  const setCategoryHandler = (tag: string) => {
    setCategory((prev) => (prev === tag ? "" : tag));
  };

  const categories = useSelector((state: RootState) => state.tag);
  return (
    <>
      <div className="addNew__header">
        <button>Cancel</button>
        <h3>Task</h3>
        <button className="addNew__header__colored">Save</button>
      </div>
      <h4>Title</h4>
      <input className="addNew__titleInput"></input>
      <h4>Category</h4>
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
      <h4>Date</h4>
      <DatePickerInput
        icon={<img className="calendar" src="/icons/calendar.svg"></img>}
        rightSection={<img src="/icons/expandDown.svg"></img>}
        size="md"
        placeholder="Pick Date"
        valueFormat="DD/MM/YYYY"
      ></DatePickerInput>
      <h4>Time</h4>
      <input></input>
      <h4>Notes</h4>
      <textarea placeholder="Take a note!" className="addNew__notes"></textarea>
    </>
  );
};

export default AddNew;
