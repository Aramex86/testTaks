import React from "react";
import styles from "./Input.module.css";

type InputProps = {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
};

export default function Input({
  placeholder,
  onChange,
  value,
  className,
}: InputProps) {
  return (
    <input
      className={`${styles.input} ${className}`}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
