export type Client = {
  id: string;
  name: string;
  fone: string;
  email: string;
};

export type FormProps = {
  addClient: (newClient: Client) => void;
};

export type ClientProps = {
  deletePlayer: (clientId: string) => void;
  updatePlayer: (clientId, newData: Client) => void;
};
