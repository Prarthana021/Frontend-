import "../styles/Button.css";

function Button(props) {
  return (
    <button
      className="button"
      onClick={props.onClick}
      type={props.type || "button"} //there are 3 types mostly button, submit and reset and this says default ||=button
    >
      {props.children}
    </button>
  );
}
  export default Button;


