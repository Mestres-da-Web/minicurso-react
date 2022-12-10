import styles from "./styles.module.css";

interface Props {
  text: string;
  icon?: JSX.Element;
}

const Button = ({ text, icon }: Props) => {
  return (
    <button
      className={styles.button}
      onClick={() => console.log("Button pressed")}
    >
      {icon && icon}
      <span>{text}</span>
    </button>
  );
};

export default Button;
