import React, { useState, useEffect } from 'react';
import './AddNoteForm.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const AddNoteForm = ({ addNote, notebooks}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [selectedNotebook, setSelectedNotebook] = useState('');
  const [initialSelectedNotebook, setInitialSelectedNotebook] = useState('');

  useEffect(() => {
    // Set the initially selected notebook when the component mounts
    if (notebooks.length > 0) {
      setInitialSelectedNotebook(notebooks[0]._id);
      setSelectedNotebook(notebooks[0]._id);
    }
  }, [notebooks]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && text.trim() !== '' && selectedNotebook.trim() !== '') {
      try {
        // Call the addNote function with the new note data
        addNote({ title, text, notebook: selectedNotebook });
        setTitle('');
        setText('');
        setSelectedNotebook(initialSelectedNotebook);
      } catch (error) {
        console.error('Error adding note:', error);
      }
    }
  };

  return (
    <div id="new-note-container">
      <form className="note-container-item" id="AddNoteForm" onSubmit={handleSubmit}>
        
        <label id="title-container">
        <img
            src="/note-add-unclicked.png"
            alt="Create Note"
        />
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
        <label>
        Notebook:
        <select
          value={selectedNotebook}
          onChange={(e) => setSelectedNotebook(e.target.value)}
        >
          {notebooks
            .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
            .map((notebook) => (
        <option key={notebook._id} value={notebook._id}>
          {notebook.name}
        </option>
      ))}
        </select>
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
