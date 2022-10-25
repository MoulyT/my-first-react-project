import "./styles.scss";

function Button({ children, color = "primary" }) {
  return <button className={color}>{children}</button>;
}

export default Button;
