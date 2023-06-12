import styles from "./StepsSection.module.css";
import { Steps } from "antd";

const StepsSection = ({ current, items, steps }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{steps[current].title}</p>
      <Steps current={current} items={items} />
    </div>
  );
};

export default StepsSection;
