/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, className, ...props }) => {
  return (
    <div>
      <button className={`${styles.button} ${className}`} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
