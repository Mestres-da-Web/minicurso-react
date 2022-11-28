import ProfilePhoto from "../../assets/woman.jpg";

import styles from "./styles.module.css";

const TopHeader = () => {
  return (
    <div className={styles.topHeaderContainer}>
      <img
        src={ProfilePhoto}
        alt="foto de perfil"
        className={styles.profilePhoto}
      />
    </div>
  );
};

export default TopHeader;
