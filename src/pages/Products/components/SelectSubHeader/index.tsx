import styles from "./styles.module.css";

const SelectSubHeader = () => {
  return (
    <div className={styles.container}>
      <label htmlFor="select">Ver:</label>
      <select id="select" onChange={(e) => console.log(e.target.value)}>
        <option>Todos os produtos</option>
        <option>Produtos excluídos</option>
      </select>
    </div>
  );
};

export default SelectSubHeader;
