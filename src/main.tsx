import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChatGPTProvider } from "./contexts/providers/ChatGPTProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChatGPTProvider>
      <App />
    </ChatGPTProvider>
  </StrictMode>,
);
