import React from "react";
import styles from "./Button.module.css";
type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "simple";
  onClick?: () => void;
  icon?: React.ReactNode | string;
};

export default function Button({
  label,
  variant = "primary",
  onClick,
  icon,
}: ButtonProps) {
  return (
    <div className={styles.btnContainer}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <button className={styles[variant]} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
