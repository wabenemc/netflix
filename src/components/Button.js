import "./Button.css";
export default function Button(props) {
  console.log(props);
  return (
    <button className={`button-${props.style} button-${props.border}`}>
      {props.text}
    </button>
  );
}
