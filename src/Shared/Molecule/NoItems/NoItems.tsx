import { Button, Typography } from "Shared/Atom";
import style from "./NoItems.module.css";

interface NoItemsProps {
  resetHandler?: () => void;
}
export default function NoItems({ resetHandler }: NoItemsProps) {
  return (
    <div className={style.container}>
      <Typography
        variant="noResults"
        text="Your search did not match any results."
      />
      <Button label="Reset" variant="primary" onClick={resetHandler} />
    </div>
  );
}
