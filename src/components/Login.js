import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  //const [username, setUsername] = useState('');
  //const [password, setPassword] = useState('');
//
  //const handleRegister = async () => {
  //  await axios.post('/api/register', { username, password });
  //  console.log('User registered successfully');
  //};
//
  //const handleLogin = async () => {
  //  const response = await axios.post('/api/login', { username, password });
  //  const { token } = response.data;
  //  console.log('Login successful. Token:', token);
  //};

    const handleGetNotes = async () => {
        const response = fetch('http://localhost:5000/api/notes')
          .then(repsonse =>  response.json())
          .then(data => console.log(data))
          .catch(err => console.log('Error: ', err));
    };

  return (
    <div>
    {/*
      <h1>Authentication Example</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
  */}
      <button onClick={handleGetNotes}>Get Notes</button>
    </div>
  );
};

export default Login;
