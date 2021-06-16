import React from 'react';
import { useForm } from '../hooks/useForm';

export const EditClientForm = ({
  id,
  name,
  fone,
  email,
  updateClient,
  toggleEditForm
}) => {
  const [client, handleChange] = useForm({ id, name, fone, email });

  const handleSubmit = e => {
    e.preventDefault();
    updateClient(id, client);
    toggleEditForm(false);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Alterar nome do cliente!"
          name="name"
          value={client.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Alterar telefone cliente!"
          name="fone"
          value={client.fone}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Alterar e-mail do cliente!"
          name="email"
          value={client.email}
          onChange={handleChange}
        />
        <button>Salvar</button>
      </form>
    </>
  );
};
