import Image from "next/image";
import styles from "./FourthForm.module.css";
import TextField from "@mui/material/TextField";

const FourthForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <div className={styles.logoBox}>
          <Image src="/logo.png" width={80} height={65} />
          <Image src="/logoText.png" width={60} height={10} className={styles.logoText} />
        </div>
        <Image src="/carImage.png" width={350} height={170} className={styles.car}/>
      </div>
      <p className={styles.heading}>Driving Lisence details</p>
      <div className={styles.inputBox}>
        <TextField id="outlined-basic" label="Chassis No." variant="outlined" className={styles.input}/>
        <TextField id="outlined-basic" label="Car Make" variant="outlined" className={styles.input}/>
        <TextField id="outlined-basic" label="Car Model" variant="outlined" className={styles.input}/>
        <TextField id="outlined-basic" label="Car Year" variant="outlined" className={styles.input}/>
      </div>
      <div>
        <TextField id="outlined-basic" label="Engine No." variant="outlined" className={styles.input}/>
        <TextField id="outlined-basic" label="Model Details" variant="outlined" className={styles.input}/>
        <TextField id="outlined-basic" label="Car Estimated Value" variant="outlined" className={styles.input}/>
        <TextField id="outlined-basic" label="Driven" variant="outlined" className={styles.input}/>
      </div>
    </div>
  );
};

export default FourthForm;
