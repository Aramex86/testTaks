import React from "react";
import styles from "./Typography.module.css";

type TypographyProps = {
  text: string;
  variant?: "title" | "header" | "body" | "tableHeader" | "noResults";
  icon?: React.ReactNode | string;
};

export default function Typography({
  text,
  variant = "body",
  icon,
}: TypographyProps) {
  return (
    <p className={styles[variant]}>
      {text} {icon && <span className={styles.icon}>{icon}</span>}
    </p>
  );
}
