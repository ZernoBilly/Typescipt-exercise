import React, { useState } from "react";

import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Player from "./components/Player";
import Button from "./components/Button";
import Input from "./components/Input";

import { personName } from "../src/data/person";
import { personList } from "../src/data/personList";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <Greet name={"Heikki"} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personList} />
      <Status status={"error"} />
      <Heading>Placeholder Text</Heading>
      <Player>
        <Heading>Greatest football player is: Lionel Messi!</Heading>
      </Player>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input
        value={inputValue}
        handleChange={(event) => event}
        setInputValue={setInputValue}
      />
    </div>
  );
}

export default App;
