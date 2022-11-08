// import dataComments from "../../data/data-comments.json";
import ChatCard from "../../components/ChatCard/index";
import ChatCardComment from "../../components/ChatCardComment/index";
import useFetch from "react-fetch-hook";

const Chat = () => {
  const response2 = useFetch("http://localhost:3004/currentUser");
  const response1 = useFetch("http://localhost:3004/comments");

  if (response1.isLoading && response2.isLoading) {
    return "Loading...";
  }
  return (
    <>
      <div className="wrapper wrapper--chat">
        {response1.data.map((c) => (
          <ChatCard
            comments={c}
            key={c.id}
            currentUser={response2.data.username}
          />
        ))}
        <ChatCardComment currentUser={response2.data} />
      </div>
    </>
  );
};

export default Chat;
