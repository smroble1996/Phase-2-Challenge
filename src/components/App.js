import React, { useEffect, useState } from "react";
import BotsPage from "./BotsPage";

const API = "http://localhost:8002/bots"

function App() {
const [BotCollection, setBotCollection] = useState ([])
//I am trying to do this similarly to the practice, keeps telling me 'BotCollection is undefined'

useEffect (() => {
  fetch(API).then (res => res.json())
  .then(json => setBotCollection(json));
}, [])

  return (
    <div className="App">
      <BotsPage />
    </div>
  );
}

export default App;
