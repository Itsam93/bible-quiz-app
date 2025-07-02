import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import allQuestions from "../data/questions";

// Utility: Shuffle array
function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export default function Quiz() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { category, difficulty } = state || {};

  // Filter and prepare questions
  const filtered = allQuestions.filter(
    (q) =>
      (category === "All" || q.category === category) &&
      (difficulty === "All" || q.difficulty === difficulty)
  );

  const [questions] = useState(() =>
    shuffleArray(
      filtered.length > 10 ? shuffleArray(filtered).slice(0, 10) : filtered
    ).map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }))
  );

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);

  const nextQuestion = useCallback(() => {
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
      setSelected("");
      setTimer(15);
    } else {
      navigate("/result", { state: { score, total: questions.length } });
    }
  }, [current, navigate, questions.length, score]);

  useEffect(() => {
    if (!questions.length) return;

    if (timer === 0) {
      setTimeout(nextQuestion, 1000);
      return;
    }

    const countdown = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(countdown);
  }, [timer, nextQuestion, questions.length]);

  const handleSelect = (option) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }
    setTimeout(nextQuestion, 1000);
  };

  if (questions.length === 0) {
    return (
      <div className="text-center mt-20">
        <p className="text-lg text-red-500 font-medium">
          No questions available for the selected category and difficulty.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const currentQuestion = questions[current];

  const baseStyle =
    "block w-full p-3 sm:p-4 mb-3 border rounded text-left transition text-sm sm:text-base";

  return (
    <div className="min-h-screen bg-gray-50 px-3 sm:px-6 py-4 flex flex-col justify-start">
      {/* Sticky Timer for Mobile */}
      <div className="sm:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-50 py-2 text-center">
        <p className="text-red-600 font-bold text-lg">⏱️ {timer}s</p>
      </div>

      <div className="max-w-2xl w-full mx-auto pt-12 sm:pt-0">
        <div className="mb-6 text-center">
          <h2 className="text-xl font-semibold text-blue-800">
            Question {current + 1} of {questions.length}
          </h2>
          <div className="text-sm text-gray-600 mt-1">
            Category:{" "}
            <span className="font-medium">{currentQuestion.category}</span> |
            Difficulty:{" "}
            <span className="font-medium">{currentQuestion.difficulty}</span>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="bg-gray-200 w-full h-2 rounded-full">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{
                  width: `${((current + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <p className="text-lg font-medium mb-4">{currentQuestion.question}</p>

          <p className="mb-4 text-red-600 font-bold text-xl hidden sm:block text-center">
            Time Left: {timer}s
          </p>

          {currentQuestion.options.map((option, index) => {
            let bgColor = "bg-gray-100";
            if (selected) {
              if (option === currentQuestion.answer) bgColor = "bg-green-300";
              else if (option === selected) bgColor = "bg-red-300";
            }

            return (
              <button
                key={index}
                className={`${baseStyle} ${bgColor} ${
                  selected
                    ? "cursor-not-allowed"
                    : "hover:bg-blue-100 active:scale-[0.98]"
                }`}
                onClick={() => !selected && handleSelect(option)}
                disabled={!!selected}
              >
                {option}
              </button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
