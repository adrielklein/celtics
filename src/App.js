import React from "react";
import "./App.css";
import data from "./data";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

const Description = ({ teamData }) => (
  <ExpansionPanel>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <h1>Description</h1>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <p>{teamData.strDescriptionEN}</p>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

const Gallery = ({ teamData }) => (
  <ExpansionPanel>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <h1>Gallery</h1>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
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
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

const Stadium = ({ teamData }) => (
  <ExpansionPanel>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <h1>Stadium</h1>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <div>
        <Image imageUrl={teamData.strStadiumThumb} />
        <p>{teamData.strStadiumDescription}</p>
      </div>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

const Header = ({ teamData }) => (
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
);

const App = () => {
  const teamData = data.teams[0];
  return (
    <div style={{ margin: "50px" }}>
      <Header teamData={teamData} />
      <Description teamData={teamData} />
      <Gallery teamData={teamData} />
      <Stadium teamData={teamData} />
    </div>
  );
};

export default App;
