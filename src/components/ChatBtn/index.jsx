import "./styles.scss";
import { ReactComponent as ReplyLogo } from "../../assets/chat/images/icon-reply.svg";
import { ReactComponent as DeleteLogo } from "../../assets/chat/images/icon-delete.svg";
import { ReactComponent as EditLogo } from "../../assets/chat/images/icon-edit.svg";
import axios from "axios";
import postComment from "../../API/postComment";

function handleEdit() {
  console.log("Hay que editar el mensaje");
}
const handleReply = () => {
  postComment;
};

function handleDelete(comments) {
  axios.delete(`http://localhost/3004/comments/${comments.id}`);
}

function ChatBtn({ isUser, comments }) {
  if (isUser) {
    return (
      <div className="chat_btn__container">
        <button
          className="chat__btn chat__btn--delete"
          onClick={() => handleDelete(comments)}
        >
          <DeleteLogo />
          Delete
        </button>
        <button className="chat__btn" onClick={handleEdit}>
          <EditLogo />
          Edit
        </button>
      </div>
    );
  }

  if (!isUser) {
    return (
      <div>
        <button className="chat__btn" onClick={handleReply}>
          <ReplyLogo />
          Reply
        </button>
      </div>
    );
  }
}

export default ChatBtn;
