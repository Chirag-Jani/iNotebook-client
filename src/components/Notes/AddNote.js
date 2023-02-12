import React, { useContext, useState } from "react";
import NoteContext from "../../context/notes/NoteContext";

const AddNote = () => {
  const noteFunctions = useContext(NoteContext);

  const [noteInput, setNoteInput] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setNoteInput({ ...noteInput, [name]: value });
  };

  const addNote = () => {
    setNoteInput({ tag: "", title: "", description: "" });
    noteFunctions.addNote(
      noteInput.title,
      noteInput.description,
      noteInput.tag
    );
  };
  return (
    <div className="mx-auto">
      <h3 className="my-3"> Add a Note:</h3>
      <div className="d-flex flex-column">
        <span className="d-flex flex-column">
          <strong className=" my-2 text-">Title:</strong>
          <input
            type="text"
            placeholder="Enter Title"
            autoComplete="off"
            onChange={handleChange}
            value={noteInput.title}
            className="my-1 p-1 text-center w-50"
            name="title"
          />
        </span>

        <span className="d-flex flex-column">
          <strong className=" my-2 text-">Description:</strong>
          <input
            type="text"
            placeholder="Enter Description"
            autoComplete="off"
            onChange={handleChange}
            value={noteInput.description}
            className="my-1 p-1 text-center w-50"
            name="description"
          />
        </span>

        <span className="d-flex flex-column">
          <strong className=" my-2 text-">Tag:</strong>
          <input
            type="text"
            placeholder="Enter Tag"
            autoComplete="off"
            onChange={handleChange}
            value={noteInput.tag}
            className="my-1 p-1 text-center w-50"
            name="tag"
          />
        </span>

        <span className="">
          <button
            className="btn btn-primary my-1 text-center "
            onClick={addNote}
          >
            Add Note
          </button>
        </span>
      </div>
    </div>
  );
};

export default AddNote;
