import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn
        ? `Greetings ${props.name}! you have ${props.messageCount} unread messages`
        : `Greetings Guest!`}
    </div>
  );
};

export default Greet;
