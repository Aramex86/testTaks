import { Typography } from "Shared/Atom";
import style from "./Fallback.module.css";
import FixImg from "Shared/assets/fix.jpg";
export default function Fallback() {
  return (
    <div className={style.container}>
      <Typography
        text="Something went wrong we are working on it !"
        variant="title"
      />
      <img src={FixImg} alt="fix" />
    </div>
  );
}
