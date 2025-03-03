import { DataItemType } from "Entitys/types";
import { ReactNode, useMemo, useState } from "react";
import { Table, TableBody, TableHeader } from "Shared/Molecule";
import { statusColor, useColumns } from "../model";
import { Spinner } from "Shared/Atom";

interface TableFeatureProps {
  data: DataItemType[];
  loading?: boolean;
  noData?: ReactNode;
}

export default function TableFeature({ data, loading }: TableFeatureProps) {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    order: string;
  } | null>(null);

  const statusOrderAsc = useMemo(
    () => ["ONLINE", "PAUSED", "STOPPED", "DRAFT"],
    []
  );
  const statusOrderDesc = [...statusOrderAsc].reverse();
  const columns = useColumns();

  const sortedData = useMemo(() => {
    if (!sortConfig) return data;

    const { key, order } = sortConfig;

    if (key === "status") {
      const orderArray = order === "asc" ? statusOrderAsc : statusOrderDesc;
      return [...data].sort(
        (a, b) => orderArray.indexOf(a.status) - orderArray.indexOf(b.status)
      );
    }

    return [...data].sort((a, b) => {
      const aValue = a[key as keyof DataItemType];
      const bValue = b[key as keyof DataItemType];

      if (aValue == null) return 1;
      if (bValue == null) return -1;

      return (
        String(aValue).localeCompare(String(bValue), undefined, {
          numeric: true,
        }) * (order === "asc" ? 1 : -1)
      );
    });
  }, [data, sortConfig, statusOrderAsc, statusOrderDesc]);

  const handleSorting = (sortField: string, sortOrder: string) => {
    setSortConfig({ key: sortField, order: sortOrder });
  };

  return loading ? (
    <Spinner />
  ) : (
    <Table>
      <TableHeader colNames={columns} handleSorting={handleSorting} />
      <TableBody
        data={sortedData ? sortedData : data}
        columns={columns}
        statusColor={statusColor}
        loading={loading}
      />
    </Table>
  );
}
