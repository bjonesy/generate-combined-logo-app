import { useState } from "react";
import { ChatGPTContext } from "../ChatGPTContext.tsx";

export const ChatGPTProvider = ({ children }) => {
  const [chatMessages, setChatMessages] = useState([
    {
      role: "system",
      content: "Generate me a logo that combines Arsenal FC and Stoke City FC",
    },
  ]);

  const fetchChatGPTResponse = async (messages) => {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer API_KEY`, // Replace with your OpenAI API key
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages,
          }),
        },
      );

      const data = await response.json();
      console.log(data, "data");
      const content = data.choices[0].message.content;

      console.log(content, "content");

      setChatMessages([...messages, { role: "assistant", content }]);
    } catch (error) {
      console.error("Error fetching ChatGPT response:", error);
    }
  };

  return (
    <ChatGPTContext.Provider
      value={{ chatMessages, setChatMessages, fetchChatGPTResponse }}
    >
      {children}
    </ChatGPTContext.Provider>
  );
};
