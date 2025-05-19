"use client";

import { useState } from "react";
import styles from "./AnimatedBox.module.css";
import { AnimationStatus } from "../enum";

export default function AnimatedBox() {
  const [status, setStatus] = useState<AnimationStatus>(AnimationStatus.Idle);

  const toggleAnimation = () => {
    setStatus((prev) =>
      prev === AnimationStatus.Running
        ? AnimationStatus.Completed
        : AnimationStatus.Running
    );
  };

  return (
    <div>
      <button onClick={toggleAnimation} className={styles.toggleButton}>
        {status === AnimationStatus.Running
          ? "Stop Animation"
          : "Start Animation"}
      </button>
      <div
        className={`${styles.box} ${
          status === AnimationStatus.Running ? styles.animate : ""
        }`}
      ></div>
      <p>Status: {status}</p>
    </div>
  );
}
