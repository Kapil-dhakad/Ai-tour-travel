import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ Gemini API setup (frontend me process.env nahi chalega)
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Function to call Gemini
export async function generateTripPlan(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text(); // text output
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
