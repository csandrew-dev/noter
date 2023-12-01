import React from 'react';
import Note from './Note';

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <Note key={note._id} note={note} deleteNote={deleteNote} />
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
