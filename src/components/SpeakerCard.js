import React from "react";
import Card from "react-bootstrap/Card";

const SpeakerCard = React.memo(
  ({ id, firstName, lastName, favorite, bio, onHeartFavoriteHandler }) => {
    console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);

    return (
      <Card style={{ width: '22rem' }}>
        <Card.Body>
          <Card.Title>
            <span>
              {firstName} {lastName}
            </span>
          </Card.Title>

          <Card.Text>{bio}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
);

export default SpeakerCard;
