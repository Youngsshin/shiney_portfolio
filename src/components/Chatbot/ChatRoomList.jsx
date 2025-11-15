import React, { useEffect, useState } from "react";
import "./Chatbot.css";
import { MessageSquare, MoreVertical } from "lucide-react";

const ChatRoomList = ({ onSelectRoom, onCreateRoom, onHome }) => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showExitPanel, setShowExitPanel] = useState(false);
  const [targetRoomId, setTargetRoomId] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const res = await fetch("http://127.0.0.1:8000/chatrooms");
      const data = await res.json();
      setRooms(data.rooms || []);
    };
    fetchRooms();
  }, []);

  const handleExitChat = () => {
    if (targetRoomId) {
      setRooms((prev) => prev.filter((room) => room.id !== targetRoomId));
      setShowExitPanel(false);
      setTargetRoomId(null);
    }
  };

  // ✅ 제목에서 날짜/시간만 추출
  const extractDateTime = (title) => {
    // "10/31 AM 01:22 대화" → "10/31 AM 01:22"
    const match = title.match(/^(.+?)\s대화$/);
    return match ? match[1] : title;
  };

  return (
    <div className="chatroom-list-container">
      <h3 className="chatroom-list-title">대화</h3>

      {rooms.length === 0 ? (
        <div className="empty-chat-ui">
          <div className="empty-icon">
            <MessageSquare size={48} color="#ccc" strokeWidth={1.5} />
          </div>
          <p className="empty-text">💬 대화를 시작해보세요</p>
          <button className="new-inquiry-btn pink" onClick={onCreateRoom}>
            새 문의하기 ➤
          </button>
        </div>
      ) : (
        <>
          <ul className="chatroom-list scrollable-list">
            {rooms.map((room) => {
              const dateTime = extractDateTime(room.title);
              return (
                <li
                  key={room.id}
                  className={`chatroom-item ${
                    selectedRoom === room.id ? "active-hover" : ""
                  }`}
                  onMouseEnter={() => setSelectedRoom(room.id)}
                  onMouseLeave={() => setSelectedRoom(null)}
                >
                  <div
                    className="chatroom-info"
                    onClick={() => onSelectRoom(room.id)}
                  >
                    <p className="room-message">{room.last_message?.slice(0, 50) || "대화를 시작해보세요"}</p>
                    <span className="room-date">{dateTime}</span>
                  </div>

                  {/* hover 시 ⋯ 버튼 표시 */}
                  {selectedRoom === room.id && (
                    <button
                      className="room-options-btn"
                      onClick={() => {
                        setTargetRoomId(room.id);
                        setShowExitPanel(true);
                      }}
                    >
                      <MoreVertical size={18} />
                    </button>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="new-inquiry-bar">
            <button className="new-inquiry-btn pink" onClick={onCreateRoom}>
              새 문의하기 ➤
            </button>
          </div>
        </>
      )}

      {/* ✅ 하단 네비게이션 고정 */}
      <div className="chat-nav-fixed">
        <button className="nav-btn" onClick={onHome}>
          🏠 홈
        </button>
        <button className="nav-btn active">💬 대화</button>
      </div>

      {/* ✅ 하단 슬라이드 "상담 나가기" 패널 */}
      {showExitPanel && (
        <>
          <div
            className="overlay-bg"
            onClick={() => {
              const panel = document.querySelector(".exit-panel");
              if (panel) {
                panel.classList.remove("fadeOut");
                panel.classList.add("slideDown");
                setTimeout(() => setShowExitPanel(false), 300);
              }
            }}
          ></div>

          <div className="exit-panel">
            <p className="exit-label">더보기</p>

            <button
              className="exit-action-btn"
              onClick={() => {
                const panel = document.querySelector(".exit-panel");
                if (panel) {
                  panel.classList.remove("slideDown");
                  panel.classList.add("fadeOut");
                  setTimeout(() => {
                    handleExitChat();
                  }, 400);
                }
              }}
            >
              상담 나가기
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatRoomList;