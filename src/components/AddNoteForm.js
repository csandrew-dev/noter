import React, { useState } from 'react';
import './AddNoteForm.css';

const AddNoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() !== '' && text.trim() !== '') {
      try {
        // Call the addNote function with the new note data
        addNote({title, text});
        setTitle('');
        setText('');
      } catch (error) {
        console.error('Error adding note:', error);
      }
    }
  };

  return (
    <form id="AddNoteForm" onSubmit={handleSubmit}>
      <label>
        <input
          id='note-title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter note name..."
        />
      </label>
      <br />
      <label>
        <textarea
          id='note-content'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter notes..."
          rows="5" // Adjust the number of rows as needed
        />
      </label>
      <br />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddNoteForm;
