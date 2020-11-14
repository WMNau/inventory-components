import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import EditBox from "./EditBox";

function RowContainer({ rowData, type }) {
  const [showEditBox, setShowEditBox] = useState(false);

  return (
    <>
      <Container>
        <EditButton onClick={() => setShowEditBox(true)}>Edit</EditButton>

        <p>Name: {rowData.name}</p>
        <p>Date: {rowData.date}</p>
        <p>Description: {rowData.description}</p>
      </Container>

      {showEditBox && (
        <EditBox
          name={rowData.name}
          date={rowData.date}
          description={rowData.description}
          type={type}
          onClose={() => setShowEditBox(false)}
        />
      )}
    </>
  );
}

const Container = styled.div`
  border: 2px solid #5a7702;
  display: flex;
  font-size: 18px;
  padding: 12px;
  margin-bottom: 7px;

  & p {
    flex: 1 1 0px;
  }
`;

const EditButton = styled.button`
  border: none;
  background-color: transparent;
  color: blue;
`;

RowContainer.propTypes = {
  rowData: PropTypes.object,
  type: PropTypes.string.isRequired
};

export default RowContainer;
