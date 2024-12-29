import { SearchIcon, Profile, Chevron } from "../../assets";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.left}>
        <img src={SearchIcon} alt="search icon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className={styles.right}>
        <img className={styles.avatar} src={Profile} alt="avatar" />
        <p>Jane Doe</p>
        <img className={styles.icon} src={Chevron} alt="options" />
      </div>
    </div>
  );
};

export default Header;
