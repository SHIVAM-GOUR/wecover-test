import styles from "./ThirdForm.module.css";
import BadgeIcon from "@mui/icons-material/Badge";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

const ThirdForm = () => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>
      Upload your Vehicle License front and back images
      </p>
      <div className={styles.box}>
        <div className={`${styles.boxChild} ${styles.boxChild1}`}>
          <BadgeIcon />
          <p>DRIVING License Front</p>
        </div>
        <div className={styles.boxChild}>
          <CreditCardIcon />
          <p>DRIVING License Back</p>
        </div>
      </div>

      <p className={styles.heading}>Personal Details</p>
      <div className={styles.inputBox}>
        <TextField id="outlined-basic" label="Full Name" variant="outlined" className={styles.input}/>
        <TextField id="outlined-basic" label="Date of Birth" variant="outlined" className={styles.input}/>
        <TextField id="outlined-basic" label="Nationality" variant="outlined" className={styles.input}/>
      </div>
      <div className={styles.inputBox}>
        <TextField id="outlined-basic" label="Place of Issue" variant="outlined" className={styles.input}/>
        <TextField id="outlined-basic" label="Date of Issue" variant="outlined" className={styles.input}/>
        <TextField id="outlined-basic" label="Licence No." variant="outlined" className={styles.input}/>
      </div>
    </div>
  );
};

export default ThirdForm;
