import { useState, useEffect } from "react";
import styled from "styled-components";

import RowContainer from "../components/RowContainer";
import { getData } from "./Users";

function Alerts() {
  const [alertsData, setAlertsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getData(
        "https://fakerapi.it/api/v1/custom?_quantity=9&name=upc&date=date&description=text"
      );

      setAlertsData(res.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {alertsData.map((alert) => (
        <SmallPadding key={alert.name}>
          <RowContainer rowData={alert} type="alert" />
        </SmallPadding>
      ))}
    </div>
  );
}

const SmallPadding = styled.div`
  paddding-bottom: 24px;
`;

export default Alerts;
