// app/page.js
"use client"; // Bu satır eklenirse sayfa Client Component olur

import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  const handleExit = () => {
    window.close();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black gap-4 bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: "url('/home-bg.jpg')" }}>

     <div className="flex flex-col items-center justify-center mb-[100px] cursor-default relative">
      <img src="/home-logo.png" className="w-150 h-40" alt="HomeLogo"/>
      
      <div className="flex items-end z-10 absolute top-22 left-80">
        <h1 className="text-[30px] eyrixett1 w-[300px]"> <mark className="bg-white px-10">by erehh</mark></h1>
        <img src="/Quill.png" alt="Quill" className="w-30 h-30" />
      </div>
      
     </div>

      <div className="flex items-center justify-between w-[76%] eyrixett2">
        <button
          className="w-[180px] py-2.5 border-3 border-white rounded-4xl cursor-pointer  bg-green-700 hover:bg-green-600  transition-colors duration-300 ease-in-out text-xl text-[#fff] font-medium"
          onClick={() => router.push("/player")}>
          Play
        </button>

        <button
          className="w-[180px] py-2.5 border-3 border-white rounded-4xl cursor-pointer bg-yellow-700 hover:bg-yellow-600  transition-colors duration-300 ease-in-out text-xl text-[#fff] font-medium"
          onClick={() => router.push("/info")}>
          Info
        </button>

        <button
          className="w-[180px] py-2.5 border-3 border-white rounded-4xl cursor-pointer bg-red-700 hover:bg-red-600  transition-colors duration-300 ease-in-out text-xl text-[#fff] font-medium"
          onClick={handleExit}>
          Exit
        </button>
      </div>
    </div>
  );
}
