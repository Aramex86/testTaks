import { Input } from "Shared/Atom";
import SearchIcon from "../../icons/search.png";
import style from "./Searchbar.module.css";
interface SearchBarProps {
  itemsLength: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
export default function SearchBar({
  itemsLength = 0,
  onChange,
  value,
}: SearchBarProps) {
  return (
    <div className={style.searchContainer}>
      <div className={style.searchIconContainer}>
        <img src={SearchIcon} alt="search" className={style.searchIcon} />
      </div>
      <Input
        placeholder="What test are you looking for?"
        value={value}
        onChange={onChange}
        className={style.searchInput}
      />
      <div className={style.itemsLengthContainer}>
        <span className={style.itemsLength}>{itemsLength} tests</span>
      </div>
    </div>
  );
}
