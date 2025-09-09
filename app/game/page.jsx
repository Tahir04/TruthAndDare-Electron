"use client";
import { useState, useEffect } from "react";
import { usePlayers } from "../context/PlayersContext";
import { questions } from "../../data/questions";
import { useRouter } from "next/navigation";

export default function GamePage() {
  const { players } = usePlayers();
  const router = useRouter();

  const [currentPlayer, setCurrentPlayer] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("");

  // İlk oyuncu seç
  useEffect(() => {
    if (players.length < 2) {
      router.push("/players");
    } else {
      pickRandomPlayer();
    }
  }, []);

  const pickRandomPlayer = () => {
    const randomIndex = Math.floor(Math.random() * players.length);
    setCurrentPlayer(players[randomIndex]);
    setSelectedType("");
    setCurrentQuestion("");
  };

  const handleChoice = (type) => {
    setSelectedType(type);
    const qList = questions[type];
    const randomQ = qList[Math.floor(Math.random() * qList.length)];
    setCurrentQuestion(randomQ);
  };

  return (
    <div className="p-6 flex flex-col justify-center items-center gap-4 min-h-screen bg-black bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: "url('/game-bg.jpg')" }}>
      <h1 className="flex items-start gap-3.5 text-[36px] mb-[30px] text-white eyrixett2 font-bold"> <img src="/human-icon.png" className="w-[46px] h-[46px]" alt="icon" /> Seçilən oyunçu: <br/> {currentPlayer}</h1>

      {!selectedType ? (
        <div className="flex items-center gap-6">
          <button
            onClick={() => handleChoice("truth")}
            className="flex justify-center items-center p-3 bg-black/60 backdrop-blur-md text-white 
                      rounded-4xl shadow-lg hover:scale-102 transition-transform duration-200 cursor-pointer border-2 border-white"
          >
            <img className="w-[300px] h-[150px]" src="/truth.png"/>
          </button>

          <span className="text-4xl text-white cursor-default eyrixett2">or</span>
          <button
            onClick={() => handleChoice("dare")}
            className="flex justify-center items-center p-3 bg-black/60 backdrop-blur-md text-white 
                      rounded-4xl shadow-lg hover:scale-102 transition-transform duration-200 cursor-pointer border-2 border-white"
          >
            <img className="w-[300px]" src="/dare.png"/>
          </button>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-white/20 to-black/80
          rounded-4xl
          px-12 pt-14 pb-8
          flex flex-col gap-2 italic text-white font-medium cursor-default
          shadow-4xl
          backdrop-blur-4xl border-2 border-white
          w-[90%] max-w-[600px]"> 
        <div
  className="text-center  text-2xl mb-12 break-words whitespace-normal leading-[1.5rem]
             min-h-[2rem] max-h-[6rem] overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-black/10"
>
  {currentQuestion}
</div>



        <div className="flex gap-4 justify-center">
          <button
            onClick={pickRandomPlayer}
            className="px-4 py-2.5 border-2 border-white rounded-4xl cursor-pointer bg-green-700 hover:bg-green-600  transition-colors duration-300 ease-in-out text-[18px] text-[#fff] font-medium"
          >
            Davam et
          </button>
          <button
            onClick={() => router.push("/player")}
            className="px-4 py-2.5 border-2 border-white rounded-4xl cursor-pointer bg-gray-700 hover:bg-gray-600  transition-colors duration-300 ease-in-out text-[18px] text-[#fff] font-medium"
          >
            Oyunçuların siyahısı
          </button>
        </div>
      </div>

      )}
    </div>
  );
}
