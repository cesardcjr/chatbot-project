import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setInputText("");
  }

  return (
    <div classNameName="chat-input-container">
      <input
        classNameName="chat-input"
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
      />
      <button classNameName="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default ChatInput;
