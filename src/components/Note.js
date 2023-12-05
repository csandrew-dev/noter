import React from 'react';
import './Note.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Note = ({ note, deleteNote, startEditing }) => {
  return (
    <div className="note">
      <li>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{note.title}</ReactMarkdown>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{note.text}</ReactMarkdown>
        <button onClick={() => startEditing(note._id)}>Edit</button>
        <button onClick={() => deleteNote(note._id)}>Delete</button>
      </li>
    </div>
  );
};

export default Note;
