import React, { useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="chatbot-container">
      {isOpen && <ChatWindow onClose={toggleChat} />}
      <ChatButton isOpen={isOpen} onClick={toggleChat} />
    </div>
  );
};

export default Chatbot;
