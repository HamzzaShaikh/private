import classes from "./Card.module.css";

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

{
    // props.children is a special prop that makes everything get stored in the prop
}
export default Card;

