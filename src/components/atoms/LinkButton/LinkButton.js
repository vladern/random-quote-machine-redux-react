import "./LinkButton.css";

function LinkButton(props) {
  return (
    <a
      id={props.id}
      target={props.target}
      className="LinkButton"
      style={props.style}
      href={props.href}
    >
      {props.children}
    </a>
  );
}

export default LinkButton;
