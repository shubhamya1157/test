import { generateResponse } from "./ai";

async function chat() {
  console.log("===== AI Chat =====");
  console.log("Welcome to the chatbot!\n");

  const messages = [
    "Hello!",
    "What is TypeScript?",
    "Give me a programming tip."
  ];

  try {
    for (const message of messages) {
      console.log(`You: ${message}`);

      const response = await generateResponse(message);

      console.log(`AI: ${response}`);
      console.log("---------------------------");
    }

    console.log("Chat ended.");
  } catch (error) {
    console.error("Error communicating with AI:", error);
  }
}

chat();