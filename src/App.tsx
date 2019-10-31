import React from "react";
import Greetings from "./Greetings";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  // Property 'name' is missing
  return <Greetings onClick={onClick} />;
};

export default App;