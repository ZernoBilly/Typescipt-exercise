import React from "react";

import { PersonNamesList } from "../interfaces/personList";

const PersonList = (props: PersonNamesList) => {
  return (
    <div>
      {props.names.map((names, idx) => (
        <h5 key={idx}>
          {names.first} {names.last}
        </h5>
      ))}
    </div>
  );
};

export default PersonList;
