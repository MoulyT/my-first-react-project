import ChatBtn from "../../components/ChatBtn";
import FavCounter from "../../components/FavCounter";

const Chat = () => {
  return (
    <div>
      <h1>Chat</h1>
      <FavCounter />
      <ChatBtn>Reply</ChatBtn>
      <ChatBtn>Delete</ChatBtn>
      <ChatBtn>Edit</ChatBtn>
    </div>
  );
};

export default Chat;
