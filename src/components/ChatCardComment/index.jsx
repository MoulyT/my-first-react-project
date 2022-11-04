import "./styles.scss";
import Button from "../Button";

export default function ChatCardComment({ currentUser }) {
  const avatarCurrentUser = currentUser.image.png;
  return (
    <div className="chat_card chat_card--comment_box">
      <img
        src={avatarCurrentUser}
        alt={currentUser.username}
        className="chat_card__user_img"
      />
      <textarea name="comment" id="id_comment" cols="50" rows="6"></textarea>
      <Button>SEND</Button>
    </div>
  );
}
