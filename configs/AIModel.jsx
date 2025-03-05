  const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);


const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-lite",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

  export const AIDesignIdea  = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Based on Logo of type Mascot Generate a text prompt to create Logo for Logo title/Brand name :Indian Spices with decription: Indian Restaurant and refering to prompt: A vibrant logo featuring a friendly, animated character with a playful expression. The character is dressed in a classic uniform, complete with a distinctive accessory that adds personality. In one hand, they hold a signature item that represents the brand, while the other elements of the design—such as small decorative touches or natural accents—enhance the overall look. The background consists of a bold, circular design with subtle accents to highlight the character. Below, the brand name is displayed in bold, stylized lettering, with a slight curve and complementary decorative lines. The overall style is fun, welcoming, and full of character.. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format with ideas field\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"ideas\": [\n    {\n      \"prompt\": \"Maharaja chef with spice turban\"\n    },\n    {\n      \"prompt\": \"Dancing chili pepper with flames\"\n    },\n    {\n      \"prompt\": \"Smiling naan bread with curry\"\n    },\n    {\n      \"prompt\": \"Turmeric root genie in lamp\"\n    },\n      {\n      \"prompt\": \"Saffron flower fairy sprinkling spice\"\n    }\n  ]\n}\n```\n"},
        ],
      },
    ],
  });

  export const AILogoPrompt = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate a text prompt to create Logo for Logo Title/Brand name : kacabmc a,with description: jbas ca m, with Color combination of Ocean Blues and include Cartoon Logo design idea and Referring to this Logo Prompt:Create a set of vibrant, playful logo designs featuring cartoon-style characters with puns or witty text. Each logo should include a cute anthropomorphic object, animal, or food item with expressive features like sunglasses, hats, or smiles, combined with a short, pun-based slogan. Use bold colors, clean lines, and retro aesthetics, ensuring the design is eye-catching and cheerful. Place each logo against a dark background to make the colors pop  Give me result in JSON portal with prompt field only"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"prompt\": \"Create a cartoon logo for the brand 'kacabmc a'. The logo should incorporate an element related to 'jbas ca m' with an ocean blues color scheme. The design should be playful and include a cute, anthropomorphic cartoon character. The logo should have bold colors, clean lines, and a cheerful aesthetic. Place the logo against a dark background to make the colors pop.\"\n}\n```\n"},
        ],
      },
    ],
  });

  //const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // console.log(result.response.text()); 

