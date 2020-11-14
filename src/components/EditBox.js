import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { CloseButton, SaveButton } from "./Buttons";

function EditBox({ name, date, description, onClose, type }) {
  const [formName, setFormName] = useState(name || "");
  const [formDate, setFormDate] = useState(date || new Date());
  const [formDescription, setFormDescription] = useState(description || "");

  return (
    <Container>
      <CloseButton onClick={onClose}>X</CloseButton>

      <form>
        <FormField>
          <label htmlFor="formName">Name:</label>
          <input
            id="formName"
            aria-required="false"
            type="text"
            value={formName}
            onChange={(name) => setFormName(name)}
          />
        </FormField>

        <FormField>
          <label htmlFor="formDate">Date:</label>
          <input
            id="formDate"
            aria-required="false"
            type="text"
            value={formDate}
            onChange={(date) => setFormDate(date)}
          />
        </FormField>

        <FormField>
          <label htmlFor="formDescription">Description:</label>
          <input
            id="formDescription"
            aria-required="false"
            type="text"
            value={formDescription}
            onChange={(description) => setFormDescription(description)}
          />
        </FormField>

        <SaveButton
          onClick={async () => {
            await updateData(`https://fakedata.io/api/v1/${type}`, {
              formName,
              formDate,
              formDescription
            });
          }}
        >
          Save
        </SaveButton>
      </form>
    </Container>
  );
}

async function updateData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content=Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return response.json();
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
  type: PropTypes.string.isRequired
};

export default EditBox;
