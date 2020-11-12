import PropTypes from "prop-types";
import styled from "styled-components";

import MaterialTable from "material-table";

function ItemList({ columns, data, title, showDetails }) {
  return (
    <FullWidth>
      <MaterialTable
        columns={columns}
        data={data}
        title={title}
        actions={[
          {
            icon: () => <ViewIcon />,
            tooltip: "View Details",
            onClick: (_event, rowData) => showDetails(rowData)
          }
        ]}
      />
    </FullWidth>
  );
}

const FullWidth = styled.div`
  max-width: 100%;
`;

const ViewIcon = styled.div`
  background-color: #d2bba2;
  height: 20px;
  width: 50px;
`;

ItemList.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  title: PropTypes.string,
  showDetails: PropTypes.func
};

export default ItemList;
