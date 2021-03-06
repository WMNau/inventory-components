import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { CloseButton, SaveButton } from "./Buttons";

function EditBox({ id, name, date, description, onClose, updateData }) {
  const [formName, setFormName] = useState(name || "");
  const [formDate, setFormDate] = useState(date || new Date());
  const [formDescription, setFormDescription] = useState(description || "");

  return (
    <Container>
      <CloseButton onClick={onClose}>X</CloseButton>

      <form
        onSubmit={() => {
          updateData({
            variables: {
              id,
              name: formName,
              date: formDate,
              description: formDescription
            }
          });
        }}
      >
        <FormField>
          <label htmlFor="formName">Name:</label>
          <input
            id="formName"
            aria-required="false"
            type="text"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
        </FormField>

        <FormField>
          <label htmlFor="formDate">Date:</label>
          <input
            id="formDate"
            aria-required="false"
            type="text"
            value={formDate}
            onChange={(e) => setFormDate(e.target.value)}
          />
        </FormField>

        <FormField>
          <label htmlFor="formDescription">Description:</label>
          <input
            id="formDescription"
            aria-required="false"
            type="text"
            value={formDescription}
            onChange={(e) => setFormDescription(e.target.value)}
          />
        </FormField>

        <SaveButton type="submit">Save</SaveButton>
      </form>
    </Container>
  );
}

const Container = styled.section`
  border: 1px solid #a39bb0;
  margin: 24px auto;
  padding: 12px;
  width: 50%;
`;

const FormField = styled.div`
  padding: 12px;

  & * {
    display: block;
    font-size: 16px;
  }
`;

EditBox.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired
};

export default EditBox;
