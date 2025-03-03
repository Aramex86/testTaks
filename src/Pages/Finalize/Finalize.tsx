import { useNavigate, useParams } from "react-router";
import { Button, Spinner, Typography } from "Shared/Atom";
import BackArrow from "../../Shared/icons/Arrow.png";
import style from "./Finalize.module.css";
import { TableFeature } from "Features";
import { siteApi, testApi } from "Entitys/api";
import useGetDataById from "Entitys/model/useFetchDataById";
import { DataItemType, SiteType } from "Entitys/types";

export default function Finalize() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: testData, isFetching } = useGetDataById<DataItemType>(
    `${testApi.getTestById}/${id}`
  );
  const { data: siteData } = useGetDataById<SiteType>(
    `${siteApi.getSiteById}/${testData ? testData?.siteId : ""}`
  );

  if (isFetching) {
    return <Spinner />;
  }
  return (
    <>
      <div className={style.pageContainer}>
        <Typography text="Finalize" variant="title" />
        <Typography text="Spring promotion" variant="body" />
      </div>
      {testData && siteData && (
        <TableFeature
          data={[{ ...testData, url: siteData.url }]}
          loading={isFetching}
        />
      )}

      <div className={style.buttonContainer}>
        <Button
          label="Back"
          onClick={() => navigate("/")}
          variant="simple"
          icon={<img src={BackArrow} alt="back" />}
        />
      </div>
    </>
  );
}
