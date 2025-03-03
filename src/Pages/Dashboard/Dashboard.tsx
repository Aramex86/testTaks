import { NoItems, SearchBar } from "Shared/Molecule";
import { TableFeature } from "Features";
import { Typography } from "Shared/Atom";
import style from "./Dashboard.module.css";
import { useState } from "react";
import { DataItemType, SiteType } from "Entitys/types";
import { useFetchData } from "Entitys";
import { siteApi, testApi } from "Entitys/api";

export default function Dashboard() {
  const [search, setSearch] = useState<string>("");
  const { data: siteData } = useFetchData<SiteType[]>(siteApi.getSite);
  const { data: testData, isFetching } = useFetchData<DataItemType[]>(
    testApi.getTest
  );

  const combined = testData?.map((test: DataItemType) => {
    const site = siteData?.find((s) => Number(s.id) === test.siteId);
    return site ? { ...test, url: site.url } : test;
  });

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filtered = combined?.filter((item: DataItemType) =>
    item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const resetHandler = () => {
    setSearch("");
  };

  return (
    <div>
      <div className={style.titleContainer}>
        <Typography variant="title" text="Dashboard" />
      </div>
      <SearchBar
        itemsLength={combined?.length ?? 0}
        onChange={searchHandler}
        value={search}
      />
      {!filtered?.length && !isFetching ? (
        <NoItems resetHandler={resetHandler} />
      ) : (
        <TableFeature data={filtered!} loading={isFetching} />
      )}
    </div>
  );
}
