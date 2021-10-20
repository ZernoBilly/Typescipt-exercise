import React from "react";

import Greet from "./components/Greet";
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      <Greet name={"Heikki"} messageCount={5} isLoggedIn={true} />
      <Person />
    </div>
  );
}

export default App;
