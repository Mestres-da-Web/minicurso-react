import styles from "./styles.module.css";

const Button = () => {
  return (
    <button
      className={styles.button}
      onClick={() => console.log("Button pressed")}
    >
      Novo produto
    </button>
  );
};

export default Button;
