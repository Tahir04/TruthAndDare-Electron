// app/info/page.js
"use client";

import { useRouter } from "next/navigation";

export default function InfosPage() {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex flex-col bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: "url('/info-bg.jpg')" }}>

        <div className="flex items-center mx-12 mt-16 gap-[20px]">
            <button
                className="p-3 border-2 border-white rounded-[50%] cursor-pointer  bg-yellow-700 hover:bg-yellow-600  transition-colors duration-300 ease-in-out flex items-center justify-center"
                onClick={() => router.push("/")}
                ><img src="/bck.png" className="w-[28px] h-[28px]"></img></button>
            <h1 className="text-5xl font-bold eyrixett2 text-white cursor-default">Information</h1>
        </div>

        <div className="w-[88%] mx-auto mt-10
            bg-gradient-to-r from-white/20 to-yellow-700/30
            rounded-4xl
            p-6
            flex flex-col gap-2 italic text-white font-medium cursor-default
            shadow-2xl
            backdrop-blur-4xl">

            <h1>
            Salam! Mən erehh. Bu tətbiq, “Truth & Dear” adlı məşhur söz tapma oyunun sadə versiyasıdır. 
            </h1>

            <h1>
            Bu oyun, Next.js və Electron texnologiyalarından istifadə edilərək hazırlanmışdır. 
            İstifadəçi interfeysinin dizaynında Tailwind CSS tətbiq olunmuş, məntiqi isə JavaScript vasitəsilə hazırlanmışdır. 
            </h1>

            <h1>
             Oyuna başladığınızda, əvvəlcə bütün oyuncular əlavə edilir. Daha sonra, sistem təsadüfi olaraq bir oyuncu seçir və ona iki seçim təqdim edir: Doğruluq (Truth) və Cəsarət (Dare). 
    Seçdiyi variant üzrə ona bir sual sorulur və ya bir tapşırıq verilir. Oyunun məqsədi – hər turda seçilən şəxsin sorğulara və tapşırıqlara düzgün cavab verərək və ya tapşırıqları yerinə yetirərək əyləncəli vaxt keçirməsidir. 
            </h1>

            <h1>Təkliflərinizi və rəyinizi mənimlə bölüşə bilərsiniz :) Xoş Oyunlar!</h1>
        </div>

    
    </div>
  );
}
