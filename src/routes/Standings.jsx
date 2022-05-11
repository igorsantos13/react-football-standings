import axios from "axios";
import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

export default function Standings(props) {
  const axios = require("axios");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api-football-standings.azharimm.site/leagues/${props.leagueStandings}/standings?season=${2021}&sort=asc`
      )

      .then((res) => setData(res.data.data.standings))
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  return (
    <div className="standings">
      <h1>Standings</h1>
      <ol>
        {data.map((queisso) => {
          return (
            <div>
              <li>{queisso.team.name}</li>
            </div>
          );
        })}
      </ol>
    </div>
  );
}
