import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");

  const updateTitle = e => setTitle(e.target.value);
  const addNote = e => {
    e.preventDefault();
    setNotes([...notes, { title }]);
    //clear the tilte after adding it to the notes
    setTitle("");
  };

  const removeNote = title =>
    setNotes(notes.filter(note => note.title !== title));

  // get the data from localStorage when component mounts
  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes"));
    if (notesData) {
      setNotes(notesData);
    }
  }, []);

  // store the notes in localStorage
  useEffect(
    () => {
      localStorage.setItem("notes", JSON.stringify(notes));
    },
    [notes]
  );

  return (
    <div>
      <h2>Notes</h2>
      {notes.map(note => (
        <Note key={note.title} note={note} removeNote={removeNote} />
      ))}
      <form onSubmit={addNote}>
        <input value={title} onChange={updateTitle} />
        <button>Add Note</button>
      </form>
    </div>
  );
};

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    // clean up -- component did unmount
    return () => {
      console.log("Cleaning up!");
    };
  }, []);
  return (
    <div>
      <h3>{note.title}</h3>
      <button onClick={() => removeNote(note.title)}>X</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<NoteApp />, rootElement);
