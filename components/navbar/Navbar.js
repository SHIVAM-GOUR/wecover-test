import styles from "./Navbar.module.css";
import { ArrowLeftOutlined, ReloadOutlined } from "@ant-design/icons";

const Navbar = ({ prev, current, setCurrent }) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => {
          current > 0 && prev();
        }}
      >
        <ArrowLeftOutlined />
        &nbsp;Back
      </button>

      <img className={styles.logoIcon} alt="" src="/logo.svg" />
      <button className={styles.button} onClick={() => {setCurrent(0)}}>
        <ReloadOutlined />
        &nbsp;Start Over
      </button>
    </div>
  );
};

export default Navbar;
