import "./styles.scss";
import { ReactComponent as ReplyLogo } from "../../assets/chat/images/icon-reply.svg";
import { ReactComponent as DeleteLogo } from "../../assets/chat/images/icon-delete.svg";
import { ReactComponent as EditLogo } from "../../assets/chat/images/icon-edit.svg";

function ChatBtn({ isUser }) {
  if (isUser) {
    return (
      <div className="chat_btn__container">
        <button className="chat__btn chat__btn--delete">
          <DeleteLogo />
          Delete
        </button>
        <button className="chat__btn">
          <EditLogo />
          Edit
        </button>
      </div>
    );
  }

  if (!isUser) {
    return (
      <div>
        <button className="chat__btn">
          <ReplyLogo />
          Reply
        </button>
      </div>
    );
  }
}

export default ChatBtn;
