import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const [notes, setNotes] = useState([
    {
      _id: "1",
      user: "jani",
      title: "t1",
      description: "d1",
      tag: "General",
      date: Date.now(),
      __v: "1",
    },
    {
      _id: "2",
      user: "Chirag",
      title: "t2",
      description: "d2",
      tag: "Self",
      date: Date.now(),
      __v: "2",
    },
  ]);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
