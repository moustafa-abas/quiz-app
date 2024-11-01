"use client";
import React from "react";

const page = () => {
const Name = JSON.parse(localStorage.getItem("name"));
const cat = JSON.parse(localStorage.getItem("tag"));
console.log(Name);
return (
<main className="container mx-auto my-10">
    <h3 className="text-center sm:text-3xl  capitalize sm:leading-10">
    <span className="text-orange-700 font-bold normal-case">{Name}</span>
    ,you select your favorite type of questions as
    <span className="text-orange-700 font-bold normal-case ms-1 ">
        ( {cat} ) .
    </span>
    <br />
    now we need you to select your level of questions....let's start !
    </h3>
    <section className=" my-20 flex sm:w-1/2 lg:w-1/3 mx-auto flex-col  gap-10">
    <button
        onClick={(e) => {
        localStorage.setItem("difficulty", JSON.stringify(e.target.value));
        location.replace("/Questions");
        }}
        value="easy"
        className="bg-white w-full  py-3 rounded-full  text-orange-700 text-2xl font-semibold px-4 hover:bg-black transition-all duration-300"
    >
        Easy
    </button>
    <button
        onClick={(e) => {
        localStorage.setItem("difficulty", JSON.stringify(e.target.value));
        location.replace("/Questions");
        }}
        value="Medium"
        className="bg-white w-full  py-3 rounded-full  text-orange-700 text-2xl font-semibold px-4 hover:bg-black transition-all duration-300"
    >
        Medium
    </button>
    <button
        onClick={(e) => {
        localStorage.setItem("difficulty", JSON.stringify(e.target.value));
        location.replace("/Questions");
        }}
        value="Hard"
        className="bg-white w-full  py-3 rounded-full  text-orange-700 text-2xl font-semibold px-4 hover:bg-black transition-all duration-300"
    >
        Hard
    </button>
    </section>
</main>
);
};

export default page;
