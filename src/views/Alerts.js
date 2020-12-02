import { useState } from "react";
import styled from "styled-components";
import { gql, useQuery, useMutation } from "@apollo/client";

import RowContainer from "../components/RowContainer";

const ALERTS_LIST = gql`
  query {
    getAlerts {
      id
      name
      date
      description
    }
  }
`;

const CREATE_ALERT = gql`
  mutation createAlert($name: String, $date: String, $description: String) {
    createAlert(
      input: { name: $name, date: $date, description: $description }
    ) {
      id
      name
      date
      description
    }
  }
`;

const UPDATE_ALERT = gql`
  mutation updateAlert(
    $id: ID
    $name: String
    $date: String
    $description: String
  ) {
    updateAlert(
      input: { id: $id, name: $name, date: $date, description: $description }
    ) {
      id
      name
      date
      description
    }
  }
`;

const DELETE_ALERT = gql`
  mutation deleteAlert($id: ID) {
    deleteAlert(id: $id)
  }
`;

function Alerts() {
  const { loading, error, data } = useQuery(ALERTS_LIST);

  const [createAlert] = useMutation(CREATE_ALERT);
  const [updateAlert] = useMutation(UPDATE_ALERT);
  const [deleteAlert] = useMutation(DELETE_ALERT);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <button onClick={() => setShowCreateForm(true)}>Create New Alert</button>

      {showCreateForm && (
        <form
          onSubmit={() => {
            createAlert({
              variables: { name: name, date: date, description: description }
            });

            setName("");
            setDate("");
            setDescription("");
          }}
        >
          <label>Name:</label>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

          <label>Date:</label>
          <input
            type="text"
            value={date}
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
          />

          <label>Description:</label>
          <input
            type="text"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">Save</button>
        </form>
      )}

      {data.getAlerts.map((alert) => (
        <SmallPadding key={alert.id}>
          <RowContainer
            rowData={alert}
            updateData={updateAlert}
            deleteData={deleteAlert}
          />
        </SmallPadding>
      ))}
    </>
  );
}

const SmallPadding = styled.div`
  paddding-bottom: 24px;
`;

export default Alerts;
