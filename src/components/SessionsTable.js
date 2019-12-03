import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";



const SessionsTable = (props) => {  
  
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
            {props.sessionsList.map(({id, time, firstName,lastName, title, description }) => {
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
  
  export default SessionsTable;