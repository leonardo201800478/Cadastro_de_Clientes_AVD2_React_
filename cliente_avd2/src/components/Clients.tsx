import React from 'react';
import { ClientItem } from './ClientItem';

export const Clients = ({ clients, deleteClient, updateClient }) => {
  return (
    <div>
      {clients.map(client => (
        <ClientItem
          key={client.id}
          id={client.id}
          name={client.name}
          fone={client.fone}
          email={client.email}
          deleteClient={deleteClient}
          updateClient={updateClient}
        />
      ))}
    </div>
  );
};
