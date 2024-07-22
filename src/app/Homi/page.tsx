"use client";

import React, { useState } from "react";
import axios from "axios";

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = async () => {
    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);

    try {
      const response = await axios.post("/api/boot", { body: userInput });
      const botMessage = response.data.output;
      setMessages([...newMessages, { sender: "bot", text: botMessage }]);
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
      } else {
        console.error("Error:", error.message);
      }
    }

    setUserInput("");
  };

  return (
    <div className="chat-bot p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="chat-window max-h-80 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.sender === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            } p-2 rounded mb-2`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container flex">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded-l"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-r"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
