// frontend/src/components/AddNotebookButton.js

import React, { useState } from 'react';
import './AddNotebookButton.css';

const AddNotebookButton = ({ addNotebook }) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [name, setNotebookName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      try {
        // Call the addNotebook function with the new notebook data
        addNotebook({ name });
        setNotebookName('');
        setFormVisible(false);
      } catch (error) {
        console.error('Error adding notebook:', error);
      }
    }
  };

  return (
    <div id="new-notebook-container">
      {!isFormVisible ? (
        <img
        src="/notebook-add-clicked.png"
        alt="Create Notebook"
        onClick={() => setFormVisible(true)}
        style={{ cursor: 'pointer'}}
      />
      ) : (
        <form id="new-notebook-form"
         onSubmit={handleSubmit}
         >
          <img
                src="/notebook-add-clicked.png"
                alt="Create Notebook"
                onClick={() => setFormVisible(false)}
                style={{ cursor: 'pointer'}}
            />
          <label>
            <input
              type="text"
              value={ name }
              placeholder='Enter notebook name...'
                onChange={(e) => setNotebookName(e.target.value)}
            />
          </label>
          <button type="submit">Create</button>
          <button type="button" onClick={() => setFormVisible(false)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default AddNotebookButton;
