import ChatBtn from "../../components/ChatBtn";
import FavCounter from "../../components/FavCounter";
import dataComments from "../../data/data-comments.json";
import ChatCard from "../../components/ChatCard/index";

const Chat = () => {
  return (
    <div className="wrapper wrapper--chat">
      <h1>Chat</h1>
      <FavCounter />
      <ChatBtn>Reply</ChatBtn>
      <ChatBtn>Delete</ChatBtn>
      <ChatBtn>Edit</ChatBtn>
      {dataComments.comments.map((c) => (
        <ChatCard prop={c} key={c.id} />
      ))}
    </div>
  );
};

export default Chat;
