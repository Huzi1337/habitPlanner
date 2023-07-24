import { TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

const NewResponsibility = () => {
  return (
    <>
      <div className="responsibility__header">
        <button>Cancel</button>
        <h3>Task</h3>
        <button>Save</button>
      </div>
      <TextInput label="Title"></TextInput>
      <h4>Category</h4>
      <div className="responsibility__categoryContainer">
        {/* categories.map() */}
      </div>
      <DatePickerInput></DatePickerInput>
      <h4>Time</h4>
      <input></input>
      <h4>Notes</h4>
      <textarea className="responsibility__notes"></textarea>
    </>
  );
};

export default NewResponsibility;
