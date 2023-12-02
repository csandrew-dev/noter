import React from 'react';
import './NotebookList.css'
import Notebook from './Notebook';

const NoteList = ({ notebooks, deleteNotebook }) => {
  return (
    <div>
      <h2 id="notebook-list-header">Notebooks</h2>
      <ul>
        {notebooks.map((notebook) => (
          <Notebook key={notebook._id} notebook={notebook} deleteNotebook={deleteNotebook} />
        ))}
      </ul>
    </div>
  );
};

export default NoteList;