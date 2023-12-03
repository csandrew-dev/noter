import React from 'react';
import './Notebook.css';

const Notebook = ({ notebook, deleteNotebook, onNotebookClick }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent triggering li onClick
    deleteNotebook(notebook._id);
  };

  const handleNotebookClick = () => {
    onNotebookClick(notebook._id);
  };

  return (
    <div className="notebook">
      <li>
      <img src="/notebook.png" alt="Notebook" onClick={handleNotebookClick}/>
        <span className="notebook-name">{notebook.name}</span>
        <button onClick={handleDelete}>Delete</button>
      </li>
    </div>
  );
};

export default Notebook;