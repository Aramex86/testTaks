import { useNavigate, useParams } from "react-router";
import { Button, Typography } from "../../Shared/Atom";
import BackArrow from "../../Shared/icons/Arrow.png";
import style from "./Result.module.css";
import { TableFeature } from "Features";
import useGetDataById from "Entitys/model/useFetchDataById";
import { siteApi, testApi } from "Entitys/api";
import { DataItemType, SiteType } from "Entitys/types";
import { removeProtocol } from "Shared/model";

export default function Result() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: testData, isFetching } = useGetDataById<DataItemType>(
    `${testApi.getTestById}/${id}`
  );
  const { data: siteData, isFetching: siteFetching } = useGetDataById<SiteType>(
    `${siteApi.getSiteById}/${testData ? testData?.siteId : ""}`
  );

  return (
    <>
      <div className={style.pageContainer}>
        <Typography text="Results" variant="title" />
        <Typography text="Order basket redesign" variant="body" />
      </div>
      {testData && siteData && (
        <TableFeature
          data={[{ ...testData, url: removeProtocol(siteData.url) }]}
          loading={isFetching || siteFetching}
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
