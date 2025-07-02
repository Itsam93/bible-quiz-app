import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");

  const handleStart = () => {
    navigate("/quiz", {
      state: { category, difficulty },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 sm:p-10">
        <h1 className="text-3xl font-extrabold text-blue-700 text-center mb-4">
          Bible Quiz App
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Test your Bible knowledge by choosing a category and difficulty level.
        </p>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Select Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option>All</option>
            <option>Old Testament</option>
            <option>New Testament</option>
            <option>General</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Select Difficulty
          </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          >
            <option>All</option>
            <option>Easy</option>
            <option>Intermediate</option>
            <option>Difficult</option>
          </select>
        </div>

        <button
          onClick={handleStart}
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
