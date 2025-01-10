"use client";
import PhraseService from "@/services/phrase_service";
import Button from "@/ui/atoms/Button";
import { useState } from "react";


export default function HomeView(){
  const [phrase, setPhrase] = useState<string>("");
  const handleClickGet = async() => {
    const data:{message:string,phrase:string} = await PhraseService.getPhrase();
    setPhrase(data.phrase);
  }
  return(
    <main className="main flex justify-center items-center h-screen">
      <section className="main-section flex flex-col gap-4 w-100">
        <h1 className="text-center">Phrase generate</h1>
        <div className="section-phrase border-2 border-indigo-500 h-10 p-2 rounded-md">
          <p>{phrase}</p>
        </div>
        <Button
        onClick={handleClickGet} 
        text="Get phrase"/>
      </section>
    </main>
  )
}