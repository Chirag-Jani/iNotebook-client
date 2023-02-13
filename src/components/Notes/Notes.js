import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../../context/notes/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const Notes = (props) => {
  const navigate = useNavigate();
  const { notes, getNotes } = useContext(NoteContext);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const updateNote = (note) => {
    console.log(note);
    props.showAlert("Update API call remaining: Notes.js", "warning");
  };

  return (
    <>
      <div>
        <AddNote showAlert={props.showAlert} />
        <h3 className="my-3">Your Notes:</h3>
        <p className="container">
          {notes.length === 0 && "No notes to display!"}
        </p>
        <div className="d-flex flax-wrap">
          {notes.map((note, idx) => {
            return (
              <NoteItem
                key={idx}
                note={note}
                updateNote={updateNote}
                showAlert={props.showAlert}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
