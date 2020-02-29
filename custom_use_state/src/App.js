import React from 'react';
import './App.css';

import { init, useState } from './CustomReact';

// initialize custom react
init(App);

function App() {
  const [clicks, setClicks] = useState(0);
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <div className="row">
        <div className="btn" onClick={() => setClicks(clicks + 1)}>Click me!</div>
        <div className="label">{`You've clicked ${clicks} time${clicks !== 1 ? 's' : ''}`}</div>
      </div>
      <div className="row">
        <input className="input" type="text" value={input} onChange={e => setInput(e.target.value)} />
        <div className="label">{`You've typed: ${input}`}</div>
      </div>
    </div>
  );
}

export default App;
