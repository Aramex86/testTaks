import styles from "./StatusTag.module.css";
import { capitalizeFirstLetter } from "../../model";
import { StatusType } from "Entitys/types";

interface StatusTagProps {
  status: StatusType | string;
}

export default function StatusTag({ status }: StatusTagProps) {
  return (
    <span className={styles[status.toLowerCase()]}>
      {capitalizeFirstLetter(status.toLowerCase())}
    </span>
  );
}
