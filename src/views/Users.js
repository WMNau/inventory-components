import { useState } from "react";
import styled from "styled-components";
import { gql, useQuery, useMutation } from "@apollo/client";

import RowContainer from "../components/RowContainer";

const USERS_LIST = gql`
  query {
    getActivities {
      id
      name
      date
      description
    }
  }
`;

const CREATE_USER = gql`
  mutation createUser($name: String, $date: String, $description: String) {
    createUser(input: { name: $name, date: $date, description: $description }) {
      id
      name
      date
      description
    }
  }
`;

const UPDATE_USER = gql`
  mutation updateUser(
    $id: ID
    $name: String
    $date: String
    $description: String
  ) {
    updateUser(
      input: { id: $id, name: $name, date: $date, description: $description }
    ) {
      id
      name
      date
      description
    }
  }
`;

const DELETE_USER = gql`
  mutation deleteUser($id: ID) {
    deleteUser(id: $id)
  }
`;

function Users() {
  const { loading, error, data } = useQuery(USERS_LIST);

  const [createUser] = useMutation(CREATE_USER);
  const [updateUser] = useMutation(UPDATE_USER);
  const [deleteUser] = useMutation(DELETE_USER);

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
      <button onClick={() => setShowCreateForm(true)}>Create New User</button>

      {showCreateForm && (
        <form
          onSubmit={() => {
            createUser({
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

      {data.getUsers.map((user) => (
        <SmallPadding key={user.id}>
          <RowContainer
            rowData={user}
            updateData={updateUser}
            deleteData={deleteUser}
          />
        </SmallPadding>
      ))}
    </>
  );
}

const SmallPadding = styled.div`
  paddding-bottom: 24px;
`;

export default Users;
