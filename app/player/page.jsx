"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePlayers } from "../context/PlayersContext";

export default function PlayerPage() {
  const { players, setPlayers } = usePlayers();
  const [name, setName] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const router = useRouter();

  const addOrUpdatePlayer = () => {
    if (!name.trim()) return;
    if (editIndex !== null) {
      const updated = [...players];
      updated[editIndex] = name.trim();
      setPlayers(updated);
      setEditIndex(null);
    } else {
      if (!players.includes(name.trim())) {
        setPlayers([...players, name.trim()]);
      }
    }
    setName("");
  };

  const editPlayer = (index) => {
    setEditIndex(index);
    setName(players[index]); 
  };

  const removePlayer = (index) => {
    setPlayers(players.filter((_, i) => i !== index));
  };

  const startGame = () => {
    if (players.length >= 2) router.push("/game");
  };

  const goHome = () => {
    setPlayers([]); 
    router.push("/");
  };

  return (
    <div className="flex flex-col  min-h-screen bg-black gap-4 bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: "url('/player-bg.jpg')" }}>
      
      <div className="flex items-center mx-10 mt-14 gap-[20px]">
            <button
                className="p-3 border-2 border-white rounded-[50%] cursor-pointer  bg-yellow-700 hover:bg-yellow-600  transition-colors duration-300 ease-in-out flex items-center justify-center"
                onClick={goHome}
                ><img src="/bck.png" className="w-[28px] h-[28px]"></img></button>
            <div className="flex flex-col ">
              <h1 className="text-[60px] text-white eyrixett1 font-extrabold">Oyunçu  Siyahısı</h1>
              <h4 className="text-[20px] text-white italic font-normal">Oyunun başlaması üçün ən az 2 oyunçu daxil edilməlidir</h4>
            </div>
      </div>
      
      <div className="flex justify-between w-[58%] mx-auto">
        <div className="w-[100%]">
          <div className="mt-10 flex gap-2 border-2 border-white rounded ">
          <input
            className="border-none text-white eyrixett2 text-xl px-4 py-1 focus:outline-none rounded w-[90%]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Oyunçunun adı"
          />
          <button
            onClick={addOrUpdatePlayer}
            className="text-xl eyrixett2 text-white font-semibold px-6 py-2 rounded cursor-pointer  bg-yellow-700 hover:bg-yellow-600  transition-colors duration-300 ease-in-out"
          >
            {editIndex !== null ? "Rename" : "Ok"}
          </button>
        </div>

        <ul className="mt-4 space-y-2 max-h-[140px] overflow-y-auto">
          {players.map((p, i) => (
            <li key={i} className="flex justify-between border-0 border-white px-4 pb-1">
              <span className="flex items-center gap-1.5 text-white font-semibold cursor-default">
                <img src="/human-icon.png" className="w-[20px] h-[20px]" alt="icon" />
                {p}
              </span>

              <div className="space-x-4">
                <button
                  onClick={() => editPlayer(i)}
                  className="text-yellow-600 hover:text-yellow-700 transition-colors duration-300 ease-in-out italic font-semibold cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => removePlayer(i)}
                  className="text-red-600 hover:text-red-700 transition-colors duration-300 ease-in-out italic font-semibold cursor-pointer"
                >
                  Del
                </button>
              </div>
            </li>
          ))}
        </ul>
        </div>   
      </div>

      {players.length >= 2 && (
        <button
          onClick={() => router.push("/game")}
          className=" bg-green-700 hover:bg-green-600  transition-colors duration-300 ease-in-out eyrixett2 text-xl border-2 w-[200px] mx-auto cursor-pointer text-white px-4 py-2 rounded-4xl mt-4"
        >
          Oyuna Başla
        </button>
      )}  
    </div>
  );
}
