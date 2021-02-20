import React, { useState, useEffect } from 'react';
import './App.css';

import User from './components/User';

const data = [
  {
    name: 'Isa',
    description: 'Gosta de sorvete'
  },
  {
    name: 'Cintia',
    description: 'Gosta de goiabada cascão'
  },
  {
    name: 'Moni',
    description: 'Gosta de mousse'
  }
];

const App = () => {
  const [users, setUsers] = useState(data);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    console.log('Componente App montado!');
  }, []);
  
  useEffect(() => {
    console.log('Input "description" foi alterado!');
  }, [description]);

  useEffect(() => {
    console.log('Input "name" foi alterado!');
  }, [name]);

  useEffect(() => {
    console.log('"users" foi alterado!');
  }, [users]);

  useEffect(() => {
    console.log('Algum estado foi alterado!');
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([ ...users, { name, description } ])
  }

  return (
    <div className="App">
      {
        users.map((user, index) => {
          return (
            <User
              key={index}
              name={user.name}
              description={user.description}
            />
          )
        })
      }

      <form>
        <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
        <input type='text' value={description} onChange={(event) => setDescription(event.target.value)} />
        <button type='submit' onClick={(event) => handleSubmit(event)}>Criar novo usuário</button>
      </form>
    </div>
  );
}

export default App;
