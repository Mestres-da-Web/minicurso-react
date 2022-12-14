import styles from "./styles.module.css";

interface Props {
  text: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  icon?: JSX.Element;
}

const Button = ({ text, type, icon }: Props) => {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={() => console.log("Button pressed")}
    >
      {icon && icon}
      <span>{text}</span>
    </button>
  );
};

export default Button;
