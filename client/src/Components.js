import { useState } from "react";
import Countdown from "./Countdown";

function Components() {
  const [seconds, setSeconds] = useState(0);

  function onSecondsChanged(event) {
    const newSeconds = parseInt(event.target.value);
    setSeconds(newSeconds);
  }

  return (
    <div className="container">
      <h1>Components</h1>
      <p>{seconds} seconds for my timer</p>
      <input type="number" value={seconds} onChange={onSecondsChanged} />
      <Countdown seconds={seconds} />
    </div>
  );
}

export default Components;
