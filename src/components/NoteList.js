import React, { useContext } from "react";
import Note from "./Note";
import NotesContext from "../context/notes-context";

const NoteList = () => {
  const { notes } = useContext(NotesContext);
  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <Note key={note.title} note={note} />
      ))}
    </div>
  );
};

export { NoteList as default };
