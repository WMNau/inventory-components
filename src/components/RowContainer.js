import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function RowContainer({ rowData }) {
  return (
    <Container>
      <p>Name: {rowData.name}</p>
      <p>Date: {rowData.date}</p>
      <p>Description: {rowData.description}</p>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #ccc;
`;

RowContainer.propTypes = {
  rowData: PropTypes.object
};

export default RowContainer;
