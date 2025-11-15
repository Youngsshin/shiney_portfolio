import React from "react";
import { MessageCircle, X } from "lucide-react";
import "./Chatbot.css";

const ChatButton = ({ isOpen, onClick }) => {
  return (
    <button
      className="chatbot-button"
      onClick={onClick}
      title={isOpen ? "챗봇 닫기" : "포트폴리오 챗봇 열기"}
    >
      {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
    </button>
  );
};

export default ChatButton;
