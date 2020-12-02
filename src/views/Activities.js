import { useState } from "react";
import styled from "styled-components";
import { gql, useQuery, useMutation } from "@apollo/client";

import RowContainer from "../components/RowContainer";

const ACTIVITIES_LIST = gql`
  query {
    getActivities {
      id
      name
      date
      description
    }
  }
`;

const CREATE_ACTIVITY = gql`
  mutation createActivity($name: String, $date: String, $description: String) {
    createActivity(
      input: { name: $name, date: $date, description: $description }
    ) {
      id
      name
      date
      description
    }
  }
`;

const UPDATE_ACTIVITY = gql`
  mutation updateActivity(
    $id: ID
    $name: String
    $date: String
    $description: String
  ) {
    updateActivity(
      input: { id: $id, name: $name, date: $date, description: $description }
    ) {
      id
      name
      date
      description
    }
  }
`;

const DELETE_ACTIVITY = gql`
  mutation deleteActivity($id: ID) {
    deleteActivity(id: $id)
  }
`;

function Activities() {
  const { loading, error, data } = useQuery(ACTIVITIES_LIST);

  const [createActivity] = useMutation(CREATE_ACTIVITY);
  const [updateActivity] = useMutation(UPDATE_ACTIVITY);
  const [deleteActivity] = useMutation(DELETE_ACTIVITY);

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
      <button onClick={() => setShowCreateForm(true)}>
        Create New Activity
      </button>

      {showCreateForm && (
        <form
          onSubmit={() => {
            createActivity({
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

      {data.getActivities.map((activity) => (
        <SmallPadding key={activity.id}>
          <RowContainer
            rowData={activity}
            updateData={updateActivity}
            deleteData={deleteActivity}
          />
        </SmallPadding>
      ))}
    </>
  );
}

const SmallPadding = styled.div`
  paddding-bottom: 24px;
`;

export default Activities;
