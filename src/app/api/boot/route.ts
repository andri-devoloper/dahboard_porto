import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

// Create an asynchronous function POST to handle POST request with parameters request and response.
export async function POST(req: NextRequest) {
  try {
    // Ensure that the API key is defined
    const apiKey = "AIzaSyCyDDM91Zy3cSHmoFPMsw48HfAj4B7qzkU";
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined.");
    }

    // Access your API key by creating an instance of GoogleGenerativeAI
    const genAI = new GoogleGenerativeAI(apiKey);

    // Initialize a generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Retrieve the data we receive as part of the request body
    const data = await req.json();
    const prompt = data.body;

    // Validate prompt
    if (typeof prompt !== "string" || !prompt.trim()) {
      throw new Error("Invalid prompt.");
    }

    // Pass the prompt to the model and retrieve the output
    const result = await model.generateContent(prompt);
    const output = await result.text();

    // Send the LLM output as a server response object
    return NextResponse.json({ output });
  } catch (error) {
    // Log detailed error information
    console.error("Error in API route:", error);

    // Send a response with the error message
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
