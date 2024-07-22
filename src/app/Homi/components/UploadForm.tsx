"use client";

import React, { useState } from "react";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<
    { text: string; type: "user" | "bot" }[]
  >([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    // Tambahkan pesan pengguna
    setMessages([...messages, { text: input, type: "user" }]);

    // Simulasikan respons bot
    setTimeout(() => {
      setMessages([
        ...messages,
        { text: input, type: "user" },
        { text: "Halo! Ini adalah respons bot.", type: "bot" },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4 w-80 max-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
      <div className="p-4">
        <div className="space-y-2 h-64 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${
                msg.type === "user"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex mt-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-l-lg"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
