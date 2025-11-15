import React, { useState, useEffect } from "react";
import "./Chatbot.css";

const ChatRoom = ({ roomId, onBack }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const recommendedQuestions = [
    "AI 프로젝트 포트폴리오 소개해줘",
    "웹 구현 관련 기술스택은?",
    "FastAPI 백엔드 구조는 어떻게 돼?",
  ];

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch(`http://127.0.0.1:8000/chatrooms/${roomId}`);
      const data = await res.json();
      setMessages(data.messages || []);
    };
    fetchMessages();
  }, [roomId]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    const newMessage = { from: "user", text };
    setMessages((prev) => [...prev, newMessage]);

    const res = await fetch(`http://127.0.0.1:8000/chatrooms/${roomId}/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    });
    const data = await res.json();
    
    // ✅ 수정된 부분: 시간을 현재 시간으로 생성
    const botReply = { 
      from: "bot", 
      text: data.reply,
      time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages((prev) => [...prev, botReply]);
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="chatroom-container">
      <div className="chatroom-header">
        <button className="back-btn" onClick={onBack}>← 목록</button>
        <h3>대화</h3>
      </div>

      {/* 💬 메시지 스크롤 영역 */}
      <div className="chatroom-body">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.from}`}>
            <p>{msg.text}</p>
            {msg.time && <span className="message-time">{msg.time}</span>}
          </div>
        ))}
      </div>

      {/* 🧩 추천 질문 버튼 (본문 영역 밖) */}
      <div className="recommended-questions">
        {recommendedQuestions.map((q, i) => (
          <button key={i} className="question-btn" onClick={() => sendMessage(q)}>
            {q}
          </button>
        ))}
      </div>

      {/* ✏️ 입력창 */}
      <form onSubmit={handleSubmit} className="chatroom-footer">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력하세요..."
        />
        <button type="submit">➤</button>
      </form>
    </div>
  );
};

export default ChatRoom;