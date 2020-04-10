import React, { useState, useEffect } from "react";
import "./App.css";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CircularProgress from "@material-ui/core/CircularProgress";

const url =
  "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=boston_celtics";

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

const logoDimension = "60px";

const Header = ({ teamData }) => (
  <div style={{ textAlign: "center", marginBottom: "20px" }}>
    <img
      style={{
        height: logoDimension,
        width: logoDimension,
        display: "inline-block"
      }}
      src={teamData.strTeamBadge}
      alt="team image"
    />

    <h1
      style={{
        fontSize: "60px",
        display: "inline-block",
        margin: "0px",
        marginHorizontal: "10px"
      }}
    >
      {teamData.strTeam}
    </h1>
    <img
      style={{
        height: logoDimension,
        width: logoDimension,
        display: "inline-block"
      }}
      src={teamData.strTeamBadge}
      alt="team image"
    />
  </div>
);

const App = () => {
  const [teamData, setTeamData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      res
        .json()
        .then(res => setTeamData(res.teams[0]))
        .catch(err => setError("Error fetching team data"));
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Sorry we are experiencing technical difficulties</div>;
  }
  if (!teamData) {
    return (
      <div style={{ textAlign: "center", marginTop: "200px" }}>
        <CircularProgress />
      </div>
    );
  }
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
