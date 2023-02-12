import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  // ! host
  const host = "http://localhost:5000";

  const [notes, setNotes] = useState([]);

  // Add a note
  const getNotes = async () => {
    // ! fetch api call to edit
    const res = await fetch(`${host}/notes/mynotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNzljMDUzMzZiNjllNWYwZGZiYjYxIn0sImlhdCI6MTY3NjEyNjcxNX0.X4SjiB22_SpV-Qc4GgsmhZ7mtwZB81EMCINACXz0Urc",
      },
    });
    let data = await res.json();
    setNotes(data);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    // ! fetch api call to edit
    const res = await fetch(`${host}/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNzljMDUzMzZiNjllNWYwZGZiYjYxIn0sImlhdCI6MTY3NjEyNjcxNX0.X4SjiB22_SpV-Qc4GgsmhZ7mtwZB81EMCINACXz0Urc",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    let data = await res.json();
    console.log(data);
    // * returns a new array instead on updating an array
    let note = {
      title,
      description,
      tag,
    };
    setNotes(notes.concat(note));
  };

  // Update a note
  const updateNote = async (id, title, description, tag) => {
    // ! fetch api call to edit
    const res = await fetch(`${host}/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNzljMDUzMzZiNjllNWYwZGZiYjYxIn0sImlhdCI6MTY3NjEyNjcxNX0.X4SjiB22_SpV-Qc4GgsmhZ7mtwZB81EMCINACXz0Urc",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    let data = res.json();
    console.log(data);

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  // Delete a note
  const deleteNote = async (id) => {
    // ! fetch api call to edit
    const res = await fetch(`${host}/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNzljMDUzMzZiNjllNWYwZGZiYjYxIn0sImlhdCI6MTY3NjEyNjcxNX0.X4SjiB22_SpV-Qc4GgsmhZ7mtwZB81EMCINACXz0Urc",
      },
    });

    let data = await res.json();
    console.log(data);

    let newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNote, updateNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
