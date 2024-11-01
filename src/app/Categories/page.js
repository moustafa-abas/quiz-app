"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { FaUser } from "react-icons/fa";

const page = () => {
    const [tags, setTags] = useState();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("https://quizapi.io/api/v1/tags?apiKey=JKnszD0q1l8E4VRis8bTPinvgG92WdHdG21QoT78");
            setTags( response.data)
          } catch (error) {
            console.error("Error fetching data:", error.message);
          }
        };
    
        fetchData();
      }, []);
    const Name=JSON.parse(localStorage.getItem('name'))

  return (
    <main className='container mx-auto my-14'>
{/* <header className='flex justify-between'>
    <h1 className='text-2xl font-semibold flex gap-2 items-center'><FaUser />{Name}</h1>
    <h2 className='text-2xl font-semibold flex gap-2 items-center capitalize'>score 0 / 0</h2>
</header> */}
    <h3 className='text-center text-3xl  '> <span className='text-orange-700 font-bold'>{Name}</span>,what's your favorite type of questions..? </h3>
<section className='flex flex-wrap gap-3 md:gap-5 mt-10 justify-center'>
{
    tags?.map((tag)=>
        <button key={tag.id} value={tag.name} onClick={(e)=>{localStorage.setItem('tag',JSON.stringify(e.target.value))
            location.replace('Difficulty')
        }} className='w-full sm:w-1/4 md:w-1/5 lg:w-1/6 h-14 bg-orange-700 text-xl hover:bg-orange-900 rounded-md'>{tag.name}</button>
    )
}
</section>
    </main>
  )
}

export default page
