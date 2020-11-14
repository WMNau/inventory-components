import { useState, useEffect } from "react";
import styled from "styled-components";

import RowContainer from "../components/RowContainer";
import { getData } from "../utils/util";

function Activities() {
  const [activitiesData, setActivitiesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getData(
        "https://fakerapi.it/api/v1/custom?_quantity=31&name=word&date=date&description=text"
      );

      setActivitiesData(res.data);
    }

    fetchData();
  }, []);

  return (
    <>
      {activitiesData.map((activity) => (
        <SmallPadding key={activity.name}>
          <RowContainer rowData={activity} type="activity" />
        </SmallPadding>
      ))}
    </>
  );
}

const SmallPadding = styled.div`
  paddding-bottom: 24px;
`;

export default Activities;
