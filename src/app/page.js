"use client";
import Image from "next/image";
import { useState } from "react";
import gif from'./assets/Untitled video - Made with Clipchamp.gif'
export default function Home() {
  const [state, setState] = useState(false);
  const [name, setName] = useState("");
  setTimeout(() => {
    setState(true)
  }, 4000);
  return (
    <>
    {state?
    <form
      onSubmit={(e) => {
        e.preventDefault();
        localStorage.setItem("name",JSON.stringify(name))
        location.replace('/Categories')
      }}
      className="mx-4 flex  h-svh items-center justify-center "
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Write Your Name"
        className="h-14 w-3/4 md:w-1/2   rounded-md outline-none text-black indent-2 focus:border-2 border-orange-700 "
      />
      <button
        type="submit"
        className="bg-orange-700 h-14 ms-1  w-20 md:w-32 rounded-md hover:bg-orange-900"
      >
        Send
      </button>
    </form>
    :
    <Image src={gif} alt="welcome to my quiz-app" className="w-full h-screen"/>
  }
    </>
  );
}
