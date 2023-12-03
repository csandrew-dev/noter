import React from 'react';
import Note from './Note';
import './NoteList.css'

const NoteList = ({ notes, deleteNote, selectedNotebook, notebooks }) => {

  const filteredNotes = selectedNotebook ? notes.filter(note => note.notebook === selectedNotebook) : notes;

   // Find the selected notebook object
   const selectedNotebookObject = notebooks.find((notebook) => notebook._id === selectedNotebook);

   // Get the name of the selected notebook or use a default value
   const selectedNotebookName = selectedNotebookObject ? selectedNotebookObject.name : 'All Notebooks';

  return (
    <div id="note-list">
      <h2 id="note-list-header">Notes from {selectedNotebookName}</h2>
      <ul>
        {filteredNotes.map((note) => (
          <Note key={note._id} note={note} deleteNote={deleteNote} />
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
