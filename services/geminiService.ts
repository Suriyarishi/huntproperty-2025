import { GoogleGenAI, Type } from "@google/genai";
import { AspectRatio } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// 1. Search Grounding (Market Trends)
export const getMarketTrends = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: query,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });
    return {
      text: response.text,
      grounding: response.candidates?.[0]?.groundingMetadata?.groundingChunks
    };
  } catch (error) {
    console.error("Search Error:", error);
    throw error;
  }
};

// 2. Maps Grounding (Nearby Places)
export const getNearbyPlaces = async (location: string, lat: number, lng: number) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `What are the top rated parks, schools, and restaurants near ${location}?`,
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: {
              latitude: lat,
              longitude: lng
            }
          }
        }
      },
    });
    return {
      text: response.text,
      grounding: response.candidates?.[0]?.groundingMetadata?.groundingChunks
    };
  } catch (error) {
    console.error("Maps Error:", error);
    throw error;
  }
};

// 3. Image Editing (Nano Banana / Gemini 2.5 Flash Image)
export const editPropertyImage = async (base64Image: string, prompt: string, mimeType: string = 'image/png') => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });
    
    let resultImage = null;
    let resultText = "";

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        resultImage = `data:image/png;base64,${part.inlineData.data}`;
      } else if (part.text) {
        resultText += part.text;
      }
    }
    return { image: resultImage, text: resultText };
  } catch (error) {
    console.error("Edit Image Error:", error);
    throw error;
  }
};

// 4. Image Generation (Gemini 3 Pro Image Preview)
export const generatePropertyVisualization = async (prompt: string, aspectRatio: AspectRatio) => {
  try {
    // Note: Using generateContent for nano banana series, but for High Quality user requested:
    // The prompt says "Use gemini-3-pro-image-preview".
    // This model uses generateContent but behaves like an image generator.
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio,
          imageSize: "1K"
        }
      },
    });

    let resultImage = null;
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        resultImage = `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return resultImage;
  } catch (error) {
    console.error("Generate Image Error:", error);
    throw error;
  }
};

// 5. Image Analysis (Gemini 3 Pro Preview)
export const analyzePropertyPhoto = async (base64Image: string, mimeType: string = 'image/jpeg') => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: {
        parts: [
            { inlineData: { data: base64Image, mimeType } },
            { text: "Analyze this property image in detail. Describe the style, condition, potential renovations, and estimated value tier." }
        ]
      }
    });
    return response.text;
  } catch (error) {
    console.error("Analysis Error:", error);
    throw error;
  }
};

// 6. Thinking Mode (Investment Analysis)
export const getInvestmentAnalysis = async (propertyDetails: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Analyze the long-term investment potential of this property considering market trends: ${propertyDetails}. Be thorough and weigh pros and cons.`,
      config: {
        thinkingConfig: {
          thinkingBudget: 32768 // Max for 3 Pro
        }
      }
    });
    return response.text;
  } catch (error) {
    console.error("Thinking Error:", error);
    throw error;
  }
};

// 7. Fast Chat (Gemini 2.5 Flash Lite)
export const getFastChatResponse = async (message: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite-latest", // Alias for flash lite
      contents: message,
    });
    return response.text;
  } catch (error) {
    console.error("Fast Chat Error:", error);
    throw error;
  }
};
