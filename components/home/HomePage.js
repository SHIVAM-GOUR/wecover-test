import styles from "./HomePage.module.css";
import Navbar from "../navbar/Navbar";
import FormSection from "./FormSection";
import PersonalDetailsForm from "../personal-details-form";
import ChatFeature from "../features/ChatFeature";
import { useState } from "react";
import StepsSection from "./StepsSection";

const HomePage = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({}));

  return (
    <div className={styles.container}>
      <Navbar prev={prev} current={current} setCurrent={setCurrent}/>
      <StepsSection current={current} items={items} steps={steps}/>
      <FormSection
        current={current}
        setCurrent={setCurrent}
        next={next}
        prev={prev}
        items={items}
        steps={steps}
      />
      {/* <PersonalDetailsForm />
      <ChatFeature /> */}
    </div>
  );
};
const steps = [
  {
    title: "You are almost there! Share some details please.",
  },
  {
    title: "Excellent choice! Please provide your Personal details.",
  },
  {
    title: "Cool! We need to confirm your Driving Licence details.",
  },
  {
    title: "Nice! We need to confirm your Car details.",
  },
  {
    title: "Payment Details",
  },
];

export default HomePage;
