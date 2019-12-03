import React from "react";
import Container from "react-bootstrap/Container";
import SessionsTable from "../components/SessionsTable";
//import useAxiosFetch from "../hooks/useAxiosFetch";
import useAxios from "axios-hooks";

const Sessions = () => {
  // const { data, loading, error, errorMessage } = useAxiosFetch(
  //   "http://localhost:4000/sessions",
  //   []
  // );

  const [{ data, loading, error }, refetch] = useAxios(
    "http://localhost:4000/sessions"
  );

  const sessionsList = loading ? [] : data;

  if (error)
    return (
      <div>
        {error}&nbsp;"Make sure you have launched "npm run json-server"
      </div>
    );

  if (loading) return <div>Loading...</div>;

  return <SessionsTable sessionsList={sessionsList} />;
};

export default Sessions;
