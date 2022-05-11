import "./App.css";
import useFetch from "./hooks/useFetch";
import Card from "./components/Card";
import Standings from "./routes/Standings";
import { useState } from "react";

function App(props) {
  const { data, loading, error } = useFetch(
    "https://api-football-standings.azharimm.site/leagues"
  );
  const [displayStandings, setDisplayStandings] = useState(false);
  const { isCompleted, setIsCompleted } = useState(false);

  return (
    <div className="leagues">
      <ul>
        {data.map((leagues) => {
          return <Card leagues={leagues} />;
        })}
      </ul>
    </div>
  );
}

export default App;
