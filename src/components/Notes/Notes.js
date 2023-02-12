import React, { useContext, useEffect } from "react";
import NoteContext from "../../context/notes/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const Notes = () => {
  const { notes, getNotes } = useContext(NoteContext);
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const updateNote = (note) => {
    console.log(note);
    alert("Update API call remaining: Notes.js");
  };

  return (
    <>
      <div>
        <AddNote />
        <h3 className="my-3">Your Notes:</h3>
        <div>
          <p className="container">
            {notes.length === 0 && "No notes to display!"}
          </p>
          {notes.map((note, idx) => {
            return <NoteItem key={idx} note={note} updateNote={updateNote} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
