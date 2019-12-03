import React, { useMemo } from "react";

import SpeakerCards from "../components/SpeakerCards";
//import useAxiosFetch from "../hooks/useAxiosFetch";
import useAxios from "axios-hooks";

const Speakers = ({}) => {
  // const {
  //   data,
  //  loading,
  //   error,
  //   error  } = useAxiosFetch("http://localhost:4000/speakers", []);

  const [{ data, loading, error }, refetch] = useAxios(
    "http://localhost:4000/speakers"
  );

  const speakerListFiltered = loading ? [] : data;

  if (error)
    return (
      <div>{error}&nbsp;"Make sure you have launched db or json server "</div>
    );

  if (loading) return <div>Loading...</div>;

  return <SpeakerCards speakerList={speakerListFiltered} />;
};

export default Speakers;
