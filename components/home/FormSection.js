import styles from "./FormSection.module.css";
import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import FirstForm from "../forms/FirstForm";
import SecondForm from "../forms/SecondForm";
import ThirdForm from "../forms/ThirdForm";
import FourthForm from "../forms/FourthForm";
import FifthForm from "../forms/FifthForm";
import Image from "next/image";

const FormSection = ({ current, setCurrent, next, prev, items, steps }) => {
  const components = [
    <FirstForm />,
    <SecondForm />,
    <ThirdForm />,
    <FourthForm />,
    <FifthForm />,
  ];

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {/* FORMS SECTION */}
        {components[current]}

        {/* BUTTONS SECTION */}
        <div
          style={{
            marginTop: 24,
          }}
        >
          {current < steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => next()}
              className={styles.nextBtn}
            >
              Next
              <Image src="/icon-linearrow-right.svg" width={16} height={16} />
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
              className={styles.nextBtn}
            >
              Done
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormSection;
