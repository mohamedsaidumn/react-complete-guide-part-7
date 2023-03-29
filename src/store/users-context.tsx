import React from "react";

type user = { id: string; name: string };

export type UsersContextType = {
  users: user[];
};

const UsersContext = React.createContext<UsersContextType>({
  users: [],
});

export default UsersContext;
