import "./styles.scss";
import Button from "../Button";
import { useState } from "react";
import axios from "axios";

function postComment(text, pngUrl, webpUrl, name, state) {
  // Simple POST request with a JSON body using axios
  const comment = {
    content: text,

    createdAt: "1 min ago",
    score: 0,
    user: {
      image: {
        png: pngUrl,
        webp: webpUrl,
      },
      username: name,
    },
    id: state,
    replies: [],
  };
  axios
    .post("http://localhost:3004/comments", comment)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default function ChatCardComment({ currentUser }) {
  const avatarCurrentUser = currentUser.image.png;
  const avatarCurrentUserWebp = currentUser.image.webp;
  const userName = currentUser.username;

  const [state, setState] = useState(3);
  const [text, setText] = useState("");
  const sendComment = (e) => {
    e.preventDefault();
    console.log(text);
    postComment(
      text,
      avatarCurrentUser,
      avatarCurrentUserWebp,
      userName,
      state
    );
    setText("");
    setState(state + 1);
  };

  return (
    <div className="chat_card chat_card--comment_box">
      <img
        src={avatarCurrentUser}
        alt={userName}
        className="chat_card__user_img"
      />
      <form
        action=""
        onSubmit={sendComment}
        id="commentBoxForm"
        className="form"
      >
        <label htmlFor="">
          <textarea
            type="text"
            name="comment"
            id="id_comment"
            cols="46"
            rows="6"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </label>
        <Button type="submit" form="commentBoxForm">
          SEND
        </Button>
      </form>
    </div>
  );
}
