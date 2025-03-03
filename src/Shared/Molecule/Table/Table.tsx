import { ReactNode, PropsWithChildren } from "react";
import style from "./Table.module.css";

interface TableProps {
  children: ReactNode;
}

export default function Table({ children }: PropsWithChildren<TableProps>) {
  return <table className={style.tableContainer}>{children}</table>;
}
