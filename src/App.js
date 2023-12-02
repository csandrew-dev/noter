import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import './App.css';
import AddNoteForm from './components/AddNoteForm';
import axios from 'axios';
import AddNotebookButton from './components/AddNotebookButton';

function App() {
  const [notes, setNotes] = useState([]);
  const [notebooks, setNotebooks] = useState([]);

  useEffect(() => {
    // Fetch notes from the server
    fetchNotes();
    fetchNotebooks();
  }, []);

  const fetchNotebooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/notebooks');
      setNotebooks(response.data);
    } catch (error) {
      console.error('Error fetching notebooks:', error);
    }
  };

  const addNotebook = async (notebookName) => {
    try {
      // Make API request to add a new notebook
      await axios.post('http://localhost:5000/api/notebooks', notebookName);
      // Fetch notebooks again to update the list
      fetchNotebooks();
    } catch (error) {
      console.error('Error adding notebook:', error);
    }
  };

  const fetchNotes = async () => {
    try {
      // Make API request to get all notes
      const response = await axios.get('http://localhost:5000/api/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const addNote = async (noteData) => {
    try {
      // Make API request to add a new note
      await axios.post('http://localhost:5000/api/notes', noteData);
      // Fetch notes again to update the list
      fetchNotes();
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      // Make API request to delete a note
      await axios.delete(`http://localhost:5000/api/notes/${id}`);
      // Fetch notes again to update the list
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="App">
      <h1 id="app-name">Noter</h1>
      <AddNotebookButton addNotebook={addNotebook}/>
      <AddNoteForm addNote={addNote} notebooks={notebooks}/>
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;