import styles from "./styles.module.css";

interface Props {
  text: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  icon?: JSX.Element;
  onClick?: () => void;
}

const Button = ({ text, type, icon, onClick }: Props) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {icon && icon}
      <span>{text}</span>
    </button>
  );
};

export default Button;
