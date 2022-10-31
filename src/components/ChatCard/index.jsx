import "./styles.scss";
import FavCounter from "../FavCounter/index";

export default function ChatCard({ prop }) {
  const name = prop.user.username;
  const createdAt = prop.createdAt;
  const image = prop.user.image.png;
  const text = prop.content;
  const counter = prop.score;

  return (
    <>
      <div className="chat_card">
        <FavCounter counter={counter} />
        <div>
          <div>
            <img src={image} alt={name} /> <a href="/chat">{name}</a>{" "}
            <span>{createdAt}</span>
          </div>
          <p>{text}</p>
        </div>
      </div>
      <div className="chat_reply">
        {prop.replies?.length > 0 &&
          prop.replies.map((r) => <ChatCard prop={r} key={r.id} />)}
      </div>
    </>
  );
}
