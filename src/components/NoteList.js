import React from "react";
import Note from "./Note";

const NoteList = ({ notes, removeNote }) => {
  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <Note key={note.title} note={note} removeNote={removeNote} />
      ))}
    </div>
  );
};

export { NoteList as default };
