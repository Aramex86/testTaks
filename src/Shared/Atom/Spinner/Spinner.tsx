import style from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={style.container}>
      <span className={style.loader}></span>
    </div>
  );
}
