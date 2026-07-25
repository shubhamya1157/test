import { generateResponse } from "./ai";

export async function askAI(question: string): Promise<string> {
  const prompt = `
You are a helpful programming assistant.

User Question:
${question}`;
  return generateResponse(prompt);
}
