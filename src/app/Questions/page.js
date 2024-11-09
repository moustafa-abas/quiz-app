"use client";
import axios from "axios";
import React, { lazy, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import trueMark from "../assets/Black and White Futuristic Coming Soon A3 Landscape.webp";
import falseMark from "../assets/Black and White Futuristic Coming Soon A3 Landscape (1).webp";
import Image from "next/image";
const page = () => {
  const [Name,setName] = useState('');
  const [cat,setCat] = useState('');
  const [difficulty,setDifficulty] = useState('');
  useEffect(() => {
  setName(JSON.parse(localStorage.getItem("name")))
  setCat(JSON.parse(localStorage.getItem("tag")))
  setDifficulty(JSON.parse(localStorage.getItem("difficulty")))
  }, [])
  // const Name = ;
  // const cat = ;
  // const difficulty = ;
  const [quiz, setQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showCorrection, setShowCorrection] = useState(false);
  const [finish, setFinish] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://quizapi.io/api/v1/questions?apiKey=JKnszD0q1l8E4VRis8bTPinvgG92WdHdG21QoT78&&tags=${cat}&&difficulty=${difficulty}`
        );
        setQuiz(response.data);
      } catch (error) {
        setQuiz(null);
      }
    };

    fetchData();
  }, []);
  var questions;
  quiz
    ? (questions = quiz.filter(
        (question) =>
          question.correct_answer !== null &&
          question.multiple_correct_answers === "false"
      ))
    : (questions = []);
  const answers = questions[currentQuestion]?.answers;
  const answer_a = questions[currentQuestion]?.correct_answers.answer_a_correct;
  const answer_b = questions[currentQuestion]?.correct_answers.answer_b_correct;
  const answer_c = questions[currentQuestion]?.correct_answers.answer_c_correct;
  const answer_d = questions[currentQuestion]?.correct_answers.answer_d_correct;
  const answer_e = questions[currentQuestion]?.correct_answers.answer_e_correct;
  const answer_f = questions[currentQuestion]?.correct_answers.answer_f_correct;

  const handleClick = (e) => {
    setAnswer(e.target.value);
  };
  useEffect(() => {
    answer != "" ? nextQuestion() : null;
  }, [answer]);
  const nextQuestion = () => {
    answer === "true" ? setScore(score + 1) : null;

    setShowCorrection(true);
    setCurrentQuestion(currentQuestion + 1);
  };

  setTimeout(() => {
    if (showCorrection === true) {
      if (currentQuestion >= questions.length - 1) {
        setFinish(true);
      }
      setShowCorrection(false);
      setAnswer("");
    }
  }, 3000);
  setTimeout(() => {
    if (finish === true) {
      location.replace("/Categories");
      setFinish(false);
    }
  }, 4000);
  return (
    <div className="relative">
      <main className={`container mx-auto my-8   `}>
        <header className="flex justify-between">
          <h1 className="sm:text-2xl font-semibold flex gap-2 items-center">
            <FaUser />
            {Name}
          </h1>
          <h2 className="sm:text-2xl font-semibold flex gap-2 items-center capitalize">
            score <span className="text-orange-700">{score}</span> /{" "}
            {currentQuestion}
          </h2>
        </header>
        {quiz === null ? (
          <h2 className=" text-center text-2xl font-semibold mt-10 capitalize">
            no questions in this field
          </h2>
        ) : (
          <section className="mt-5">
            <h2 className="text-center text-lg ">
              question{" "}
              <span className="text-orange-700">{currentQuestion + 1}</span> /{" "}
              {questions?.length} ,{" "}
              <span className="text-orange-700">{cat}</span>
            </h2>
            <h3 className="text-center text-xl sm:text-3xl mt-3 sm:mt-5 capitalize">
              {questions?.[currentQuestion]?.question}
            </h3>
            <section className="flex flex-col mt-10 gap-6  items-center">
              {answers?.answer_a ? (
                <button
                  onClick={handleClick}
                  value={answer_a}
                  className="bg-white w-full sm:w-3/4  py-3  rounded-full  text-orange-700 sm:text-2xl font-semibold px-4 hover:bg-black transition-all duration-300"
                >
                  {questions[currentQuestion]?.answers?.answer_a}
                </button>
              ) : null}
              {answers?.answer_b ? (
                <button
                  onClick={handleClick}
                  value={answer_b}
                  className="bg-white w-full sm:w-3/4  py-3  rounded-full  text-orange-700 sm:text-2xl font-semibold px-4 hover:bg-black transition-all duration-300"
                >
                  {questions[currentQuestion]?.answers?.answer_b}
                </button>
              ) : null}
              {answers?.answer_c ? (
                <button
                  onClick={handleClick}
                  value={answer_c}
                  className="bg-white w-full sm:w-3/4  py-3  rounded-full  text-orange-700 sm:text-2xl font-semibold px-4 hover:bg-black transition-all duration-300"
                >
                  {questions[currentQuestion]?.answers?.answer_c}
                </button>
              ) : null}
              {answers?.answer_d ? (
                <button
                  onClick={handleClick}
                  value={answer_d}
                  className="bg-white w-full sm:w-3/4  py-3  rounded-full  text-orange-700 sm:text-2xl font-semibold px-4 hover:bg-black transition-all duration-300"
                >
                  {questions[currentQuestion]?.answers?.answer_d}
                </button>
              ) : null}
              {answers?.answer_e ? (
                <button
                  onClick={handleClick}
                  value={answer_e}
                  className="bg-white w-full sm:w-3/4  py-3  rounded-full  text-orange-700 sm:text-2xl font-semibold px-4 hover:bg-black transition-all duration-300"
                >
                  {questions[currentQuestion]?.answers?.answer_e}
                </button>
              ) : null}
              {answers?.answer_f ? (
                <button
                  onClick={handleClick}
                  value={answer_f}
                  className="bg-white w-full sm:w-3/4  py-3  rounded-full  text-orange-700 sm:text-2xl font-semibold px-4 hover:bg-black transition-all duration-300"
                >
                  {questions[currentQuestion]?.answers?.answer_f}
                </button>
              ) : null}
            </section>
          </section>
        )}
        <section className="flex flex-col sm:flex-row items-center sm:justify-center gap-5 sm:gap-24 mx-auto my-8 sm:my-16">
          <button
            className=" capitalize text-xl bg-orange-700 hover:bg-orange-900 sm:w-1/5 w-3/5 h-10 sm:h-14  rounded-full"
            onClick={() => location.replace("/Categories")}
          >
            back to tracks
          </button>
          <button
            className=" capitalize text-xl bg-orange-700 hover:bg-orange-900 sm:w-1/5 w-3/5 h-10 sm:h-14  rounded-full"
            onClick={() => location.replace("/Difficulty")}
          >
            back to level
          </button>
        </section>
      </main>
      {showCorrection || finish ? (
        <aside className="absolute   top-0 bottom-0  bg-opacity-95 bg-black w-full">
          <div className="absolute container w-full sm:w-1/2 top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black p-10 rounded-3xl">
            {showCorrection ? (
              <>
                <h1 className="text-2xl capitalize text-center font-semibold mb-10">
                  your answer is{" "}
                  <span className="text-orange-700 font-bold text-3xl">
                    {" "}
                    {answer === "true" ? "correct " : "  incorrect"}
                  </span>
                  <br /> and your score{" "}
                  {answer === "true" ? "become " : "still"}
                  <span className="text-orange-700 font-bold text-3xl">
                    {" "}
                    {score} / {currentQuestion}
                  </span>
                </h1>

                {answer === "true" ? (
                  <Image
                    src={trueMark}
                    alt=""
                    className="w-full sm:w-1/2 mx-auto rounded-lg"
                    loading="lazy"
                  />
                ) : (
                  <Image
                    src={falseMark}
                    alt=""
                    className="w-full sm:w-1/2 mx-auto rounded-lg"
                    loading="lazy"
                  />
                )}
              </>
            ) : (
              <h1 className="text-2xl capitalize text-center font-semibold mb-10">
                you finished this task
                <br /> and your score is
                <span className="text-orange-700 font-bold text-3xl">
                  {" "}
                  {score} / {questions.length}
                </span>
              </h1>
            )}
          </div>
        </aside>
      ) : null}
    </div>
  );
};

export default page;
