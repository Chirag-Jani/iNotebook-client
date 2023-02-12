import React, { useContext } from "react";
import NoteContext from "../../context/notes/NoteContext";

const NoteItem = (props) => {
  const { note, updateNote } = props;
  const { deleteNote } = useContext(NoteContext);

  const onDelete = () => {
    deleteNote(note._id);
  };

  return (
    <div className="col-3 ">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title"> {note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p className="card-text">{note.tag}</p>
          <i className="fa fa-trash-alt mx-2" onClick={onDelete}></i>
          <i
            className="fa fa-edit mx-2"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
