import React, { useState } from 'react';
import './Notebook.css';

const Notebook = ({ notebook, deleteNotebook, onNotebookClick, updateNotebookName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(notebook.name);


  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    deleteNotebook(notebook._id);
  };

  const handleNotebookClick = () => {
    onNotebookClick(notebook._id);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    // Save the edited name if it's not empty
    if (editedName.trim() !== '') {
      updateNotebookName(notebook._id, editedName);
    } else {
      // If the edited name is empty, reset it to the original name
      setEditedName(notebook.name);
    }
  };

  const handleChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Save the edited name when Enter key is pressed
      handleBlur();
    } else if (e.key === 'Escape') {
      // Cancel the edit when Escape key is pressed
      setIsEditing(false);
      setEditedName(notebook.name);
    }
  };


  return (
    <div className="notebook">
      <li>
      <img src="/notebook.png" alt="Notebook" onClick={handleNotebookClick} onDoubleClick={handleDoubleClick}/>
      {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
        <span className="notebook-name">{notebook.name}</span>
        )}
        <button onClick={handleDelete}>Delete</button>
      </li>
    </div>
  );
};

export default Notebook;