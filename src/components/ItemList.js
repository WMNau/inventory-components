import React from "react";
import styled from "styled-components";

import MaterialTable from "material-table";

function ItemList({ columns, data, title, showDetails }) {
  return (
    <MaterialTable
      columns={columns}
      data={data}
      title={title}
      actions={[
        {
          icon: () => <ViewIcon />,
          tooltip: "View Details",
          onClick: (_e, rowData) => showDetails(rowData)
        }
      ]}
    />
  );
}

const ViewIcon = styled.div`
  background-color: #d2bba2;
  height: 20px;
  width: 50px;
`;

export default ItemList;
