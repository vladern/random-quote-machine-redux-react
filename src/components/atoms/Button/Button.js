import "./Button.css";

function Button(props) {
  return (
    <button
      id={props.id}
      className="Button"
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
