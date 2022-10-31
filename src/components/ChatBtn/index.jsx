import "./styles.scss";
import { ReactComponent as ReplyLogo } from "../../assets/chat/images/icon-reply.svg";
import { ReactComponent as DeleteLogo } from "../../assets/chat/images/icon-delete.svg";
import { ReactComponent as EditLogo } from "../../assets/chat/images/icon-edit.svg";

function ChatBtn({ children }) {
  if (children === "Delete") {
    return (
      <span>
        <button className="chat__btn">
          <DeleteLogo />
          {children}
        </button>
      </span>
    );
  }

  if (children === "Edit") {
    return (
      <span>
        <button className="chat__btn">
          <EditLogo />
          {children}
        </button>
      </span>
    );
  }
  if (children === "Reply") {
    return (
      <span>
        <button className="chat__btn">
          <ReplyLogo />
          {children}
        </button>
      </span>
    );
  }
}

export default ChatBtn;
