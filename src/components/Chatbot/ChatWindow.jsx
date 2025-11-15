import React, { useState } from "react";
import ChatRoomList from "./ChatRoomList";
import ChatRoom from "./ChatRoom";
import botIcon from "../../assets/Images/chatbot_icon.png";
import "./Chatbot.css";

const ChatWindow = ({ onClose }) => {
  const [view, setView] = useState("home"); // 'home' | 'list' | 'chat'
  const [currentRoomId, setCurrentRoomId] = useState(null);

  const handleCreateRoom = async () => {
    const res = await fetch("http://127.0.0.1:8000/chatrooms/new", { method: "POST" });
    const data = await res.json();
    setCurrentRoomId(data.chat_id);
    setView("chat");
  };

  const handleSelectRoom = (id) => {
    setCurrentRoomId(id);
    setView("chat");
  };

  return (
    <div className="chatbot-window">
      {/* 🏠 홈 */}
      {view === "home" && (
        <div className="chatbot-home-bg">
          <div className="chatbot-welcome-card">
            {/* 헤더 */}
            <div className="welcome-header">
              <img src={botIcon} alt="bot" className="welcome-avatar" />
              <div>
                <h3 className="welcome-title">김영신 포트폴리오 챗봇</h3>
                <p className="welcome-subtitle">24시간 응답 가능 😊</p>
              </div>
            </div>

            {/* 흰색 카드 */}
            <div className="welcome-body card-style">
              <p className="welcome-greeting">
                안녕하세요? <br />
                저는 AI 프로젝트나 웹 구현 관련 내용을 안내해드리는{" "}
                <strong>AI 포트폴리오 챗봇</strong>이에요.
                <br /><br />
                궁금한 점을 선택하시거나 대화를 시작하시면 빠르게 도움을 드릴 수 있습니다. 🙂
              </p>
              <button className="welcome-btn primary" onClick={() => setView("list")}>
                💬 대화 시작하기
              </button>
            </div>

            {/* 하단 문의 박스 */}
            <div className="welcome-footer-box">
              <p className="footer-text">다른 방법으로 문의</p>
              <div className="footer-icons-right">
                <span className="footer-icon">📞</span>
                <span className="footer-icon">✉️</span>
              </div>
            </div>

            {/* 홈 네비 */}
            <div className="welcome-nav">
              <button className={`nav-btn ${view === "home" ? "active" : ""}`} onClick={() => setView("home")}>
                🏠 홈
              </button>
              <button className={`nav-btn ${view === "list" ? "active" : ""}`} onClick={() => setView("list")}>
                💬 대화
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 💬 대화 목록 (항상 하단 네비/새문의하기 포함) */}
      {view === "list" && (
        <ChatRoomList
          onSelectRoom={handleSelectRoom}
          onCreateRoom={handleCreateRoom}
          onHome={() => setView("home")}   // ← 여기 때문에 “대화 → 홈”이 동작
        />
      )}

      {/* 💬 실제 대화창 (네비/새문의하기 없음) */}
      {view === "chat" && (
        <ChatRoom
          chatId={currentRoomId}
          onBack={() => setView("list")}
        />
      )}
    </div>
  );
};

export default ChatWindow;
