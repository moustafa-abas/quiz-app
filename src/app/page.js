"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        localStorage.setItem("name",name)
        location.replace('/categories')
      }}
      className="w-full flex  h-svh items-center justify-center"
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Write Your Name"
        className="h-14 w-1/2   rounded-md outline-none text-black indent-2 focus:border-2 border-orange-700 "
      />
      <button
        type="submit"
        className="bg-orange-700 h-14 ms-1 w-20 rounded-md hover:bg-orange-600"
      >
        Send
      </button>
    </form>
  );
}
