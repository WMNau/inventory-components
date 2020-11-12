import { useState, useEffect } from "react";
import styled from "styled-components";

import RowContainer from "../components/RowContainer";
import { getData } from "./Users";

function Activities() {
  const [activitiesData, setActivitiesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getData(
        "https://fakerapi.it/api/v1/custom?_quantity=9&name=upc&date=date&description=text"
      );

      setActivitiesData(res.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {activitiesData.map((activity) => (
        <SmallPadding key={activity.name}>
          <RowContainer rowData={activity} type="activity" />
        </SmallPadding>
      ))}
    </div>
  );
}

const SmallPadding = styled.div`
  paddding-bottom: 24px;
`;

export default Activities;
