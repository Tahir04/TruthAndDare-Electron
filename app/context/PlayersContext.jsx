"use client";
import { createContext, useContext, useState } from "react";

const PlayersContext = createContext();

export const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  return (
    <PlayersContext.Provider value={{ players, setPlayers }}>
      {children}
    </PlayersContext.Provider>
  );
};


export function usePlayers() {
  return useContext(PlayersContext);
}
