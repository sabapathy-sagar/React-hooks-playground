import React, { useState, useContext } from "react";
import NotesContext from "../context/notes-context";

const AddNoteForm = () => {
  const { dispatchNotes } = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = e => {
    e.preventDefault();
    dispatchNotes({
      type: "ADD_NOTE",
      title,
      body
    });
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <textarea value={body} onChange={e => setBody(e.target.value)} />
        <button>add note</button>
      </form>
    </div>
  );
};

export { AddNoteForm as default };
