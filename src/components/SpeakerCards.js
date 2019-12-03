import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SpeakerCard from "./SpeakerCard"

const SpeakerCards = (props) => {

    return (
      <div>
        <h1>Our Speakers</h1>
        <Container>
          <Row>
            {props.speakerList.map(({ id, firstName, lastName, bio }) => {
              return (
                <SpeakerCard
                  key={id}
                  id={id}
                  firstName={firstName}
                  lastName={lastName}
                  bio={bio}
                />
              );
            })}
          </Row>
        </Container>
      </div>
    );
  
  }

  export default SpeakerCards;

