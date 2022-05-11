import React from "react";
import Standings from "../routes/Standings";
import { useState } from "react";
import App from "../App";
import { Outlet, Link } from "react-router-dom";

export default function Card(props) {
  const [leagueStandings, setleagueStadings] = useState(null);

  return (
    <div className="card-leagues">
      <div className="card">
        <h1>{props.leagues.name}</h1>
        <img
          className="card-image"
          src={props.leagues.logos.light}
          alt={props.leagues.name}
        />
        <button
          value={props.leagues.id}
          onClick={(e) => setleagueStadings(e.target.value)}
        >
          Show standings
        </button>
      </div>

      <div className="standings">
        {leagueStandings && <Standings leagueStandings={leagueStandings} />}
      </div>
    </div>
  );
}
