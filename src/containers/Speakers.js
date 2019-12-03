import React, {
  useMemo
} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


import SpeakerDetail from "../components/SpeakerDetail";
import useAxiosFetch from "../hooks/useAxiosFetch";

const Speakers = ({}) => {
  const {
    data,
    isLoading,
    hasErrored,
    errorMessage  } = useAxiosFetch("http://localhost:4000/speakers", []);

  const newSpeakerList = useMemo(
    () =>
      data.sort(function(a, b) {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (a.firstName > b.firstName) {
          return 1;
        }
        return 0;
      }),
    [data]
  );

  const speakerListFiltered = isLoading ? [] : newSpeakerList;

  if (hasErrored)
    return (
      <div>
        {errorMessage}&nbsp;"Make sure you have launched "npm run json-server"
      </div>
    );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Our Speakers</h1>
      <Container>
        <Row>
          {speakerListFiltered.map(({ id, firstName, lastName, bio }) => {
            return (
              <SpeakerDetail
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
};

export default Speakers;
