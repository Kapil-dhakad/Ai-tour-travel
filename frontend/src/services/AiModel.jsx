// src/services/ai.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ Gemini API setup
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// ⚡ Fastest model (lite version)
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

// ---------------- Normal function ----------------
export async function generateTripPlan(prompt) {
  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // JSON parse check
    try {
      return JSON.parse(text);
    } catch {
      return text; // agar parse fail ho jaye to raw text bhej do
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}

// ---------------- Streaming function ----------------
export async function generateTripPlanStream(prompt, onData) {
  try {
    const streamingResp = await model.generateContentStream(prompt);
    let fullText = "";

    for await (const chunk of streamingResp.stream) {
      const chunkText = chunk.text();
      fullText += chunkText;
      if (onData) onData(chunkText); // realtime update UI me bhej do
    }

    // JSON parse check
    try {
      return JSON.parse(fullText);
    } catch {
      return fullText; // agar JSON na bane to raw text return karo
    }
  } catch (error) {
    console.error("Gemini Streaming Error:", error);
    throw error;
  }
}
