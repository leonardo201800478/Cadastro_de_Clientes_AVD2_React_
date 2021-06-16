import React, { useState } from 'react';
import { EditClientForm } from './EditClientForm';

export const ClientItem = ({
  id,
  name,
  fone,
  email,
  deleteClient,
  updateClient
}) => {
  const [isEdit, setToggleEditing] = useState(false);

  if (isEdit) {
    return (
      <EditClientForm
        id={id}
        name={name}
        fone={fone}
        email={email}
        updateClient={updateClient}
        toggleEditForm={setToggleEditing}
      />
    );
  }

  return (
    <>
     
      <span><h2>{name}</h2></span>
      <span><h3>Telefone: {fone}</h3></span>
      <span><h3>E-mail: {email}</h3></span>
      <span><button onClick={() => setToggleEditing(!isEdit)}>Alterar</button></span>
      <span><button onClick={() => deleteClient(id)}>Excluir</button></span>
    
    </>
  );
};
