import React from 'react';
import './Note.css';

const Note = ({ note, deleteNote }) => {
  return (
    <div className="note">
      <li>
        <h4>{note.title}</h4>
        <p>{note.text}</p>
        <button onClick={() => deleteNote(note._id)}>Delete</button>
      </li>
    </div>
  );
};

export default Note;
