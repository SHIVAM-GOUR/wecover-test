import styles from "./FifthForm.module.css";
import TextField from "@mui/material/TextField";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const FifthForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <p className={styles.heading}>Order Summary</p>
        <div className={styles.textBox}>
          <p className={`${styles.text} ${styles.headText}`}>Payment Method</p>
          <p className={styles.text}>Sukoon Insurance</p>
        </div>
        <div className={styles.textBox}>
          <p className={`${styles.text} ${styles.headText}`}>Akilah Abbar</p>
          <p className={styles.text}>21/04/89</p>
        </div>
        <div className={styles.textBox}>
          <p className={`${styles.text} ${styles.headText}`}>Akilah Abbar</p>
          <p className={styles.text}>21/04/89</p>
        </div>
        <div className={styles.textBox}>
          <p className={`${styles.text} ${styles.headText}`}>Akilah Abbar</p>
          <p className={styles.text}>21/04/89</p>
        </div>
        <p className={styles.heading}>Voucher</p>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          className={styles.input}
          sx={{ width: "100%" }}
        />
        <p className={styles.heading}>Payment Summary</p>
        <div className={styles.textBox}>
          <p className={`${styles.text} ${styles.headText}`}>Sub Total</p>
          <p className={styles.text}>AED 45.60</p>
        </div>
        <div className={styles.textBox}>
          <p className={`${styles.text} ${styles.headText}`}>Discount</p>
          <p className={styles.text}>- AED 45.60</p>
        </div>
        <div className={styles.textBox}>
          <p className={`${styles.text} ${styles.headText}`}>VAT</p>
          <p className={styles.text}>AED 45.60</p>
        </div>
        <hr />
        <div className={styles.textBox}>
          <p className={styles.mainText}>VAT</p>
          <p className={styles.mainText}>AED 45.60</p>
        </div>
      </div>
      <div className={styles.subContainer}>
        <p className={styles.heading}>Payment Method</p>
        <TextField
          id="outlined-basic"
          label="Card Number"
          variant="outlined"
          className={styles.input}
          sx={{ width: "100%" }}
        />
        <div className={styles.paymentInputs}>
          <TextField
            id="outlined-basic"
            label="Expiration Date"
            variant="outlined"
            className={styles.input}
            sx={{ width: "49%" }}
          />
          <TextField
            id="outlined-basic"
            label="CVV"
            variant="outlined"
            className={styles.input}
            sx={{ width: "49%" }}
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Name on Card"
          variant="outlined"
          className={styles.input}
          sx={{ width: "100%" }}
        />
        <button className={styles.payButton}><AccountBalanceWalletIcon/>Pay</button>
      </div>
    </div>
  );
};

export default FifthForm;
