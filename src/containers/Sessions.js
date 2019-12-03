import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import useAxiosFetch from "../hooks/useAxiosFetch";

const Sessions = () => {
  const { data, isLoading, hasErrored, errorMessage } = useAxiosFetch(
    "http://localhost:4000/sessions",
    []
  );

  const sessionsList = isLoading ? [] : data;

  if (hasErrored)
    return (
      <div>
        {errorMessage}&nbsp;"Make sure you have launched "npm run json-server"
      </div>
    );

  if (isLoading) return <div>Loading...</div>;

  return (
    <Container>
      <h1> Conference Schedule</h1>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Time</th>
            <th>Speaker Name</th>
            <th> Session Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {sessionsList.map(({id, time, firstName,lastName, title, description }) => {
            return (
              <tr key ={id}>
                <td>{time}</td>
                <td>{firstName} {lastName}</td>
                <td>{title}</td>
                <td>{description}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Sessions;
