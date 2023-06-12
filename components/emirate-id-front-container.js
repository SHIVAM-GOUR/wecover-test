import { useMemo } from "react";
import styles from "./emirate-id-front-container.module.css";
const EmirateIdFrontContainer = ({
  idFront,
  idBack,
  propBackgroundColor,
  propWidth,
  propHeight,
}) => {
  const idFrontStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const idFrontrIconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className={styles.idFront} style={idFrontStyle}>
      <img
        className={styles.idFrontrIcon}
        alt=""
        src={idFront}
        style={idFrontrIconStyle}
      />
      <div className={styles.plan}>
        <div className={styles.wecoverHealthInsurance}>{idBack}</div>
      </div>
    </div>
  );
};

export default EmirateIdFrontContainer;
