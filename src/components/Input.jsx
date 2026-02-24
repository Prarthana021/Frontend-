import "../styles/Input.css";

export default function Input(props) {

  return (

    <input

      className="input"

      type={props.type || "text"}

      placeholder={props.placeholder}

      value={props.value}

      onChange={props.onChange}

    />

  );

}