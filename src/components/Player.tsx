import React from "react";

type PlayerProps = {
  children: React.ReactNode;
};

const Player = (props: PlayerProps) => {
  return <div>{props.children}</div>;
};

export default Player;
