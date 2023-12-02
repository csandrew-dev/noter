import React from 'react';
import './Notebook.css';

const Notebook = ({ notebook, deleteNotebook }) => {
  return (
    <div className="notebook">
      <li>
      <img
            src="/notebook.png"
            alt="Create Notebook"
        />
        {notebook.name}
        <button onClick={() => deleteNotebook(notebook._id)}>Delete</button>
      </li>
    </div>
  );
};

export default Notebook;