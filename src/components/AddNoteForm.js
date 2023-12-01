import React, { useState } from 'react';
import './AddNoteForm.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
    <div id="new-note-container">
      <form className="note-container-item" id="AddNoteForm" onSubmit={handleSubmit}>
        <label id="title-container">
          <input
            id='note-title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter note name..."
          />
        </label>
        <br />
        <label id="note-container">
          <textarea
            id='note-content'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter notes..."
            rows="5"
          />
        </label>
        <label id="note-button">
          <button type="submit">Add</button>
        </label>
        <br />
      </form>
      <div className="note-container-item" id="note-preview">
        <h2 id="preview-notice">Note preview:</h2>
        <div id="preview-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]} >{title}</ReactMarkdown>
          <ReactMarkdown remarkPlugins={[remarkGfm]} >{text}</ReactMarkdown>
        </div>
      </div>
    </div>
    
  );
};

export default AddNoteForm;
