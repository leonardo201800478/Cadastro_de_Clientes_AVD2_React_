import React, { useState } from 'react';
import { FormProps } from '../types/types';
import { Client } from '../types/types';

export const AddClientForm: React.FC<FormProps> = ({ addClient }) => {
  const initialValue: Client = {
    id: '',
    name: '',
    fone: '',
    email: ''
  };

  const [client, setClient] = useState(initialValue);

  const handleChange = e => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addClient(client);
    setClient(initialValue);
  };

  return (
    <>
      
      <form onSubmit={handleSubmit}>
      
        <input
          type="text"
          name="name"
          placeholder="Entre com o nome do cliente"
          onChange={handleChange}
          value={client.name}
        />
      
        <input
          type="text"
          name="fone"
          placeholder="Entre com o telefone do cliente"
          onChange={handleChange}
          value={client.fone}
        />
        
        <input
          type="text"
          name="email"
          placeholder="Entre com o e-mail do cliente"
          onChange={handleChange}
          value={client.email}
        />
        
      
        <button>Adicionar</button>
      </form>
    </>
  );
};
