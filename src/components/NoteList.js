import React from 'react';
import Note from './Note';
import './NoteList.css'

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div>
      <h2 id="note-list-header">Notes</h2>
      <ul>
        {notes.map((note) => (
          <Note key={note._id} note={note} deleteNote={deleteNote} />
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
