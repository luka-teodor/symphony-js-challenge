import React from 'react';
import Tree from './components/Tree/Tree';

import './App.css';

import testData from './testData';

function App() {
  return (
    <div className="App">
      <Tree json={testData}/>
    </div>
  );
}

export default App;
