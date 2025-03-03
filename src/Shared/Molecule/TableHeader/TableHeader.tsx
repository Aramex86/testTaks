import { Typography } from "Shared/Atom";
import style from "./TableHeader.module.css";
import { useState } from "react";
import ArrowUp from "Shared/icons/ArrowUp.png";

interface TableHeaderProps {
  colNames: {
    key: string;
    label: string;
    type: string;
    width?: string | number;
    sortable?: boolean;
  }[];
  handleSorting?: (accessor: string, sortOrder: string) => void;
}
export default function TableHeader({
  colNames,
  handleSorting,
}: TableHeaderProps) {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor: string) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";

    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting!(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {colNames.map((item) => {
          const cl = item.sortable ? (
            sortField === item.key && order === "asc" ? (
              <img src={ArrowUp} alt="up" />
            ) : sortField === item.key && order === "desc" ? (
              <img src={ArrowUp} alt="down" className={style.arrowDown} />
            ) : (
              <img src={ArrowUp} alt="up" />
            )
          ) : (
            ""
          );

          return (
            <th
              key={item.key}
              className={style.tableHeaderCell}
              style={{ width: item.width ?? 100 }}
              onClick={() =>
                item.sortable ? handleSortingChange(item.key) : null
              }
            >
              <Typography variant="tableHeader" text={item.label} icon={cl} />
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
