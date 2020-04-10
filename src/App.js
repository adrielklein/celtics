import React from "react";
import "./App.css";
import data from "./data";

const Image = ({ imageUrl }) => (
  <div
    style={{
      margin: "5px",
      border: "1px solid #ccc",
      width: "180px"
    }}
  >
    <a target="_blank" href={imageUrl}>
      <img src={imageUrl} width="500" height="282" />
    </a>
  </div>
);

const App = () => {
  const teamData = data.teams[0];
  return (
    <div style={{ margin: "50px" }}>
      <div>
        <img
          style={{ height: "100px", width: "100px", display: "inline-block" }}
          src={teamData.strTeamBadge}
          alt="team image"
        />
        <div style={{ display: "inline-block", fontSize: "50px" }}>
          <p style={{ fontSize: "50px" }}>{teamData.strTeam}</p>
        </div>
        <img
          style={{ height: "100px", width: "100px", display: "inline-block" }}
          src={teamData.strTeamBadge}
          alt="team image"
        />
      </div>
      <p>{teamData.strDescriptionEN}</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "500px 500px",
          columnGap: "10px"
        }}
      >
        <Image imageUrl={teamData.strTeamFanart1} />
        <Image imageUrl={teamData.strTeamFanart2} />
        <Image imageUrl={teamData.strTeamFanart3} />
        <Image imageUrl={teamData.strTeamFanart4} />
      </div>
    </div>
  );
};

export default App;
