import styles from "./FirstForm.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FirstForm() {
  const [age, setAge] = React.useState("");
  const [one, setOne] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange1 = (event) => {
    setOne(event.target.value);
  };

  return (
    <div className={styles.container}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Car Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"I will buy this car"}>I will buy this car</MenuItem>
        </Select>
      </FormControl>
      <div className={styles.space}/>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label1">
          GCC Specs & Modified
        </InputLabel>
        <Select
          labelId="demo-simple-select-label1"
          id="demo-simple-select"
          value={one}
          label="Age"
          onChange={handleChange1}
        >
          <MenuItem value={"Non GCC"}>Non GCC</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
