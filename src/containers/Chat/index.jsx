import dataComments from "../../data/data-comments.json";
import ChatCard from "../../components/ChatCard/index";
import ChatCardComment from "../../components/ChatCardComment/index";

const Chat = () => {
  return (
    <>
      <div className="wrapper wrapper--chat">
        {dataComments.comments.map((c) => (
          <ChatCard comments={c} key={c.id} />
        ))}
        <ChatCardComment currentUser={dataComments.currentUser} />
      </div>
    </>
  );
};

export default Chat;
