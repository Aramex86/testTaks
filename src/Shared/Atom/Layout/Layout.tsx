import React, { PropsWithChildren } from "react";
import style from "./Layout.module.css";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: PropsWithChildren<LayoutProps>) {
  return <div className={style.container}>{children}</div>;
}
