import React from "react";
import Notes from "../Notes/Notes";

const Home = (props) => {
  return (
    <>
      <div className="container">
        <Notes showAlert={props.showAlert} />
      </div>
    </>
  );
};

export default Home;
