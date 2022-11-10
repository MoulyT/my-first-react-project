import "./styles.scss";
import Button from "../Button";

export default function ChatCardComment({
  currentUser,
  onSubmit,
  text,
  setText,
}) {
  const avatarCurrentUser = currentUser.image.png;
  const userName = currentUser.username;

  return (
    <div className="chat_card chat_card--comment_box">
      <img
        src={avatarCurrentUser}
        alt={userName}
        className="chat_card__user_img"
      />
      <form action="" onSubmit={onSubmit} id="commentBoxForm" className="form">
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
