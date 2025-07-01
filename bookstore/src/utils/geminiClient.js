import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI("AIzaSyCxtpNDFAVeshhrHwJ3LE51XSe2E-NExNY");

export const getRecommendations = async (title, author) => {
  const prompt = `Suggest 3 books similar to '${title}' by ${author}. Return in JSON format with title and author.`;
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  const response = await result.response.text();

  try {
    const jsonStart = response.indexOf('[');
    const jsonEnd = response.lastIndexOf(']') + 1;
    const jsonString = response.substring(jsonStart, jsonEnd);
    return JSON.parse(jsonString);
  } catch (err) {
    console.error("AI Response parsing error", err);
    return [];
  }
};