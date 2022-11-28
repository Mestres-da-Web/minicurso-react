import { Outlet } from "react-router-dom";
import LeftHeader from "../LeftHeader";
import TopHeader from "../TopHeader";

import styles from "./styles.module.css";

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.leftContainer}>
        <LeftHeader />
      </div>
      <div className={styles.rightContainer}>
        <TopHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
