import "./styles.scss";
import FavCounter from "../FavCounter/index";
import ChatBtn from "../ChatBtn";

function YouTag({ isUser }) {
  return isUser && <span className="chat_card__you">you</span>;
}

export default function ChatCard({ comments, currentUser }) {
  const name = comments.user?.username;
  const createdAt = comments.createdAt;
  const image = comments.user.image.png;
  const text = comments.content;
  const counter = comments.score;
  var isUser = null;
  if (name === currentUser) {
    isUser = true;
  } else isUser = false;

  return (
    <>
      <div className="chat_card">
        <FavCounter counter={counter} />
        <div>
          <div className="chat_card__header">
            {name ? (
              <div className="chat_card__tittle">
                <img src={image} alt={name} className="chat_card__img" />{" "}
                <a href="/chat">{name}</a> <YouTag isUser={isUser} />
                <span className="chat_card__createdAt">{createdAt}</span>
              </div>
            ) : null}
            <ChatBtn isUser={isUser} comments={comments} />
          </div>
          <p>{text}</p>
        </div>
      </div>
      <div className="chat_card--reply">
        {comments.replies?.length > 0 && //EL signo de ? es para saber si existe
          comments.replies.map((r) => (
            <ChatCard comments={r} key={r.id} currentUser={currentUser} />
          ))}
      </div>
    </>
  );
}
