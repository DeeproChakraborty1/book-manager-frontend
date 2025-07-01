import { useEffect, useState } from "react";
import { getRecommendations } from "../utils/geminiClient";

const AIRecommendations = ({ title, author }) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    getRecommendations(title, author).then(setSuggestions);
  }, [title, author]);

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold">AI Recommended Books</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        {suggestions.map((book, index) => (
          <div key={index} className="border p-3 rounded bg-gray-500">
            <h4 className="font-bold">{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommendations;