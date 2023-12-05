// src/components/EditNoteForm.js
import React, { useState, useEffect } from 'react';
import './EditNoteForm.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const EditNoteForm = ({ note, editNote, stopEditing, notebooks, selectedNotebook, setSelectedNotebook }) => {
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedText, setEditedText] = useState(note.text);
  const [editingNotebook, setEditingNotebook] = useState(note.notebook || '');


  useEffect(() => {
    // Set the initially selected notebook when the component mounts or when note changes
    if (notebooks.length > 0 && !editingNotebook) {
      setEditingNotebook(note.notebook || ''); // Use the note's notebook or an empty string if not available
    }
  }, [notebooks, note, editingNotebook]);
  

  const handleSave = () => {
    // Save the edited note if either title or text is not empty
    if (editedTitle.trim() !== '' || editedText.trim() !== '') {
      editNote(note._id, { title: editedTitle, text: editedText, notebook: editingNotebook });
      stopEditing();
    }
  };

  const handleCancel = () => {
    stopEditing();
    setEditedTitle(note.title);
    setEditedText(note.text);
  };
  
  const handleNotebookChange = (e) => {
    setEditingNotebook(e.target.value);
    console.log(e.target.value);
    console.log(editingNotebook);
  };
  

  return (
    <div id="edit-note-container">
      <form className="note-container-item" id="EditNoteForm">
        <label id="title-container">
          <img
            src="/note-add-unclicked.png"
            alt="Create Note"
          />
          <input
            id='note-title'
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        </label>
        <br />
        <label id="note-container">
          <textarea
            id='note-content'
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            rows="5"
          />
        </label>
        <label>
          Notebook:
          <select
            value={editingNotebook}
            onChange={handleNotebookChange}
          >
            <option value="">No Notebook Selected.</option>
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
          <button type="button" onClick={handleSave}>Save</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </label>
      </form>
      <div className="note-container-item" id="note-preview">
        <h2 id="preview-notice">Note preview:</h2>
        <div id="preview-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{editedTitle}</ReactMarkdown>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{editedText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default EditNoteForm;