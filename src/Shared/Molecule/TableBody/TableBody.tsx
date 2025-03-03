import { DataItemType } from "Entitys/types";
import style from "./TableBody.module.css";

interface TableBodyProps {
  data: DataItemType[];
  columns: {
    key: string;
    label: string;
    render?: (item: DataItemType) => React.ReactNode;
    width?: string;
  }[];
  statusColor?: Record<string, string>;
  loading?: boolean;
}

export default function TableBody({
  data,
  columns,
  statusColor,
}: TableBodyProps) {
  return (
    <tbody>
      {data?.map((item) => (
        <tr key={item.id} className={style.rowItem}>
          {columns.map((column, index) => {
            return (
              <td
                key={column.key}
                className={style.tableCell}
                style={
                  index === 0
                    ? {
                        borderLeft: `4px solid ${
                          statusColor![item.status as keyof typeof statusColor]
                        }`,
                        borderRadius: "3px",
                        minWidth: `${column.width}`,
                      }
                    : {}
                }
              >
                {column.render
                  ? column.render(item)
                  : item[column.key as keyof DataItemType]}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
}
