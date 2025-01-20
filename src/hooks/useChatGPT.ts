import { useContext } from "react";
import { ChatGPTContext } from "../contexts/ChatGPTContext.tsx";

export const useChatGPT = () => useContext(ChatGPTContext);
