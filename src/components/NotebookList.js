import React from 'react';
import './NotebookList.css'
import Notebook from './Notebook';

const NotebookList = ({ notebooks, deleteNotebook, onNotebookClick, updateNotebookName }) => {
  return (
    <div id='notebook-list'>
      <h2 id="notebook-list-header">Notebooks</h2>
      <ul>
        {notebooks.map((notebook) => (
          <Notebook key={notebook._id} notebook={notebook} deleteNotebook={deleteNotebook} onNotebookClick={onNotebookClick} updateNotebookName={updateNotebookName} />
        ))}
      </ul>
    </div>
  );
};

export default NotebookList;