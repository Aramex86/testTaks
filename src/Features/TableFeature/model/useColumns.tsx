import { DataItemType } from "Entitys/types";
import { useNavigate } from "react-router";
import { StatusTag, Button } from "Shared/Atom";
import { removeProtocol } from "Shared/model";

export default function useColumns() {
  const navigate = useNavigate();
  return [
    {
      key: "name",
      label: "Name",
      type: "string",
      width: "390px",
      sortable: true,
    },
    {
      key: "type",
      label: "Type",
      type: "string",
      width: "100px",
      sortable: true,
    },
    {
      key: "status",
      label: "Status",
      type: "string",
      width: "62px",
      sortable: true,
      render: (item: DataItemType) => <StatusTag status={item.status ?? ""} />,
    },
    {
      key: "url",
      label: "Site",
      type: "string",
      width: "150px",
      sortable: true,
      render: (item: DataItemType) => <span>{removeProtocol(item.url!)}</span>,
    },

    {
      key: "",
      label: "",
      type: "string",
      sortable: false,
      render: (item: DataItemType) => (
        <Button
          variant={item.status === "DRAFT" ? "secondary" : "primary"}
          label={item.status === "DRAFT" ? "Finalize" : "Results"}
          onClick={() => {
            return item.status === "DRAFT"
              ? navigate(`/finalize/${item.id}`)
              : navigate(`/results/${item.id}`);
          }}
        />
      ),
    },
  ];
}
