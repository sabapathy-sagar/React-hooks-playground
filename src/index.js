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
  const removeNote = title =>
    setNotes(notes.filter(note => note.title !== title));

  return (
    <div>
      <h2>Notes</h2>
      {notes.map(note => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <button onClick={() => removeNote(note.title)}>X</button>
        </div>
      ))}
      <form onSubmit={addNote}>
        <input value={title} onChange={updateTitle} />
        <button>Add Note</button>
      </form>
    </div>
  );
};

// function App({ initCount }) {
//   const [count, setCount] = useState(initCount || 0);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     console.log("use effect");
//     document.title = count;
//   });

//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);
//   const reset = () => setCount(initCount || 0);
//   const updateText = e => setText(e.target.value);

//   return (
//     <div className="App">
//       <h1>Bonjour!</h1>
//       <p>
//         {text}: {count}
//       </p>
//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//       <button onClick={reset}>RESET</button>
//       <input value={text} onChange={updateText} />
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<NoteApp />, rootElement);
