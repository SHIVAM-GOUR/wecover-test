import styles from "./ChatFeature.module.css";

const ChatFeature = () => {
  return (
    <div className={styles.chatWithUs}>
      <div className={styles.chatWithUsChild} />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
      <img className={styles.unionIcon} alt="" src="/union.svg" />
    </div>
  );
};

export default ChatFeature;
