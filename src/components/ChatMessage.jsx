import robotImg from "../assets/robot.png";
import userImg from "../assets/user.png";
import "./ChatMessage.css";

function ChatMessage({ message, sender }) {
  // const message = props.message;
  // const sender = props.sender;

  //Destructuring
  // const { message, sender } = props;

  // if (sender === "robot") {
  //   return (
  //     <div>
  //       <img src="robot.png" width="50" />
  //       {message}
  //     </div>
  //   );
  // }
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={robotImg} className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={userImg} className="chat-message-profile" />
      )}
    </div>
  );
}

export default ChatMessage;
