import styles from "./card.module.css";
import { string } from "prop-types";

const Card = ({ title, description, img }) => {
  return (
    <div className={styles.card_container}>
      <h2 className={styles.title}>{title}</h2>
      <p>{description}</p>
      <img src={img} alt="" />
    </div>
  );
};

Card.propTypes = {
  title: string,
  description: string,
  img: string,
};

export default Card;
