import { VertexAI } from "@google-cloud/vertexai";
const vertex_ai = new VertexAI({
  project: "ai-spike-433221",
  location: "us-central1",
});
const model = "gemini-1.5-pro-002";

const generativeModel = vertex_ai.preview.getGenerativeModel({
  model: model,
  generationConfig: {
    maxOutputTokens: 1024,
    temperature: 0,
    topP: 0.95,
    responseMimeType: "application/json",
    responseSchema: {
      type: "array",
      items: {
        type: "object",
        properties: {
          descricao: { type: "string" },
          mecanismo: { type: "string" },
          principio_ativo: { type: "string" },
        },
      },
    },
  },
  safetySettings: [
    {
      category: "HARM_CATEGORY_HATE_SPEECH",
      threshold: "OFF",
    },
    {
      category: "HARM_CATEGORY_DANGEROUS_CONTENT",
      threshold: "OFF",
    },
    {
      category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
      threshold: "OFF",
    },
    {
      category: "HARM_CATEGORY_HARASSMENT",
      threshold: "OFF",
    },
  ],
});

class PromptFacade {
  constructor(prompt) {
    this.prompt = prompt;
  }

  async generateContent() {
    const req = {
      contents: [{ role: "user", parts: [this.prompt] }],
    };

    const streamingResp = await generativeModel.generateContentStream(req);

    process.stdout.write(JSON.stringify(await streamingResp.response));
  }
}

export default PromptFacade;
