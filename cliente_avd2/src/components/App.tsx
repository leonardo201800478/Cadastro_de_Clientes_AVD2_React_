import React, { useState } from 'react';
import { AddClientForm } from './AddClientForm';
import { Clients } from './Clients';
import { Client } from '../types/types';
import { v4 as uuid } from 'uuid';

const App = () => {
  const initialData = [
    {
      id: uuid(),
      name: 'Leonardo da Silva Paiva',
      fone: '2433372721',
      email: 'paivaleonard@gmail.com'
    }
  ];

  const [clients, setClients] = useState(initialData);

  const addClient= (newclient: Client) => {
    newclient.id = uuid();
    setClients([...clients, newclient]);
  };

  const deleteClient = clientId => {
    const updatedClient = clients.filter(client => clientId !== client.id);
    setClients(updatedClient);
  };

  const updateClient = (clientId, newData: Client) => {
    let updatedClient = clients.map(client => {
      if (client.id === clientId) {
        return {
          id: client.id,
          name: newData.name,
          fone: newData.fone,
          email: newData.email
        };
      }
      return client;
    });
    setClients(updatedClient);
  };

  return (
    <div>
      <h1>Formulário de Cadastro de Clientes</h1>
      <AddClientForm addClient={addClient} />
      <Clients
        clients={clients}
        deleteClient={deleteClient}
        updateClient={updateClient}
      />
    </div>
  );
};

export default App;
