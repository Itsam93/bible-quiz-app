import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { score, total } = state || {};

  const percentage = ((score / total) * 100).toFixed(1);

  const getRemark = () => {
    if (percentage >= 80) return "Excellent! 🎉";
    if (percentage >= 60) return "Great Job! 👍";
    if (percentage >= 40) return "Keep Trying! 💪";
    return "Better luck next time! 🙏";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-100 to-blue-100 px-4">
      <div className="bg-white w-full max-w-md p-6 sm:p-10 rounded-2xl shadow-xl text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-2">
          Quiz Completed!
        </h2>
        <p className="text-gray-600 mb-4">Here's how you did:</p>

        <div className="text-4xl font-bold text-blue-600 mb-2">
          {score} / {total}
        </div>
        <div className="text-lg font-medium text-gray-700 mb-6">
          {getRemark()}
        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
