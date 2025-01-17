import React from "react";

const ROPE = (
  <div
    style={{
      height: "50px",
      width: "10px",
      background: "black",
      position: "absolute",
      top: 0,
      right: 0,
    }}
  />
);

const TOP = (
  <div
    style={{
      height: "10px",
      width: "200px",
      background: "black",
      marginLeft: "120px",
    }}
  />
);

const TALL = (
  <div
    style={{
      height: "400px",
      width: "10px",
      background: "black",
      marginLeft: "120px",
    }}
  />
);

const BASE = (
  <div style={{ height: "10px", width: "250px", background: "black" }} />
);

const stick = [ROPE, TOP, TALL, BASE];

const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "118px",
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const body_parts = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type Props = {
  numofguesses: number;
};

export function HangmanBody({ numofguesses }: Props) {
  return (
    <div style={{ position: "relative" }}>
      {body_parts.slice(0, numofguesses)}

      {stick.map((item, index) => (
        <React.Fragment key={index}>{item}</React.Fragment>
      ))}
    </div>
  );
}
