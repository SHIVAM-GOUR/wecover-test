import styles from "./SecondForm.module.css";
import BadgeIcon from "@mui/icons-material/Badge";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import TextField from "@mui/material/TextField";

const SecondForm = () => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>
        Upload your Emirate ID front and back images
      </p>
      <div className={styles.box}>
        <div className={`${styles.boxChild} ${styles.boxChild1}`}>
          <BadgeIcon />
          <p>ID Front</p>
        </div>
        <div className={styles.boxChild}>
          <CreditCardIcon />
          <p>ID Back</p>
        </div>
      </div>

      <p className={styles.heading}>Personal Details</p>
      <div className={styles.inputBox}>
        <TextField id="outlined-basic" label="Full Name" variant="outlined" className={styles.input}/>
        <TextField id="outlined-basic" label="E-ID Number" variant="outlined" className={styles.input}/>
        <TextField id="outlined-basic" label="Nationality" variant="outlined" className={styles.input}/>
      </div>
      <div className={styles.inputBox}>
        <TextField id="outlined-basic" label="Date of Birth" variant="outlined" className={styles.input}/>
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" className={styles.input}/>
        <TextField id="outlined-basic" label="Email" variant="outlined" className={styles.input}/>
      </div>
    </div>
  );
};

export default SecondForm;
