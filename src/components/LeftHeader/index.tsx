import { NavLink } from "react-router-dom";

import MWIcon from "../../assets/mw-icon.svg";
import DetailsIcon from "../../assets/list-icon.svg";

import styles from "./styles.module.css";

const LeftHeader = () => {
  return (
    <div>
      <nav>
        <ul className={styles.navUl}>
          <li>
            <NavLink to="">
              <img src={MWIcon} alt="icone mestres" />
            </NavLink>
          </li>
          <li>
            <NavLink to="details">
              <img src={DetailsIcon} alt="icone detalhes" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftHeader;
