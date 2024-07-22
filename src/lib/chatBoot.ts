import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.API_KEY_AI;

if (!apiKey) {
  throw new Error("API key is not defined in environment variables");
}

const genAI = new GoogleGenerativeAI(apiKey);

// Pastikan menggunakan metode yang benar sesuai dokumentasi
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function sendMessageToModel(message: string): Promise<string> {
  try {
    // Ganti `generate` dengan metode yang sesuai, misalnya `generateResponse`
    const response = await model.generateResponse({
      prompt: message,
    });

    // Periksa struktur data yang dikembalikan
    const botReply = response.data.result;
    return botReply;
  } catch (error) {
    console.error("Error sending message to model:", error);
    throw error;
  }
}
