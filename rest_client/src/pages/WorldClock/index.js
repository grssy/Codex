import { useState } from "react";
import { getCurrentDateTime } from "../../api/WorldClockApi";

import "./styles.css";

function WorldClock() {
  const [currentDateTime, setCurrentDateTime] = useState(" ");

  async function handleGetDateTime() {
    const response = await getCurrentDateTime();

    setCurrentDateTime(response);
  }

  return (
    <div>
      <h1>{currentDateTime}</h1>
      <button onClick={handleGetDateTime}>Ver data e horário atual</button>
    </div>
  );
}

export default WorldClock;
