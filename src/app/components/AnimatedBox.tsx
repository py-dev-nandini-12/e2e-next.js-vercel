"use client";

import { useState } from "react";
import styles from "./AnimatedBox.module.css";

export default function AnimatedBox() {
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleAnimation = () => {
    setIsAnimating((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleAnimation} className={styles.toggleButton}>
        {isAnimating ? "Stop Animation" : "Start Animation"}
      </button>
      <div
        className={`${styles.box} ${isAnimating ? styles.animate : ""}`}
      ></div>
    </div>
  );
}
