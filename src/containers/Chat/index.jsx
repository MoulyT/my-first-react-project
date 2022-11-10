// import dataComments from "../../data/data-comments.json";
import ChatCard from "../../components/ChatCard/index";
import ChatCardComment from "../../components/ChatCardComment/index";
import useFetch from "react-fetch-hook";
import { useState, useEffect } from "react";
import postComment from "../../API/postComment";
import axios from "axios";

const Chat = () => {
  const response2 = useFetch("http://localhost:3004/currentUser");
  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function getComments() {
      const response = await axios.get("http://localhost:3004/comments");
      setResponse(response);
    }
    getComments();
  }, []);

  const [text, setText] = useState("");
  const handleChatComment = (e) => {
    e.preventDefault();
    postComment(
      text,
      response2.data.image.png,
      response2.data.image.webp,
      response2.data.username
    );
    setText("");
  };

  if ((response?.isLoading && response2?.isLoading) || response === null) {
    return "Loading...";
  }
  return (
    <>
      <div className="wrapper wrapper--chat">
        {console.log(response.data)}
        {response.data.map((c) => (
          <ChatCard
            comments={c}
            key={c.id}
            currentUser={response2.data.username}
          />
        ))}
        <ChatCardComment
          currentUser={response2.data}
          onSubmit={handleChatComment}
          text={text}
          setText={setText}
        />
      </div>
    </>
  );
};

export default Chat;
