import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({ BotCollection }) {
  return (
    <div>
      {BotCollection.map((BotCollection) => (
        <BotCollection key={BotCollection.id} BotCollection={BotCollection} />
      ))}
      <YourBotArmy />
      <BotCollection BotCollection={BotCollection} />
    {/* I feel like I am going bananas typing BotCollection this many times */}
    </div>
  );
}

export default BotsPage;
