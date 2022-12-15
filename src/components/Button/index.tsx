import styles from "./styles.module.css";

interface Props {
  text: string;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  icon?: JSX.Element;
  onClick?: () => void;
}

const Button = ({ text, className = "", type, icon, onClick }: Props) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {icon && icon}
      <span className={icon ? styles.withIcon : styles.withoutIcon}>
        {text}
      </span>
    </button>
  );
};

export default Button;
