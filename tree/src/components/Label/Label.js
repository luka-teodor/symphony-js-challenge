import React from 'react';

import './Label.css';

function prettyValue(value) {
  let prettyValue;
 
  if (typeof value === 'string') {
    prettyValue = `"${value}"`;
  } else if (typeof value === "boolean") {
    prettyValue = value ? 'true' : 'false'; 
  } else if (value === null) {
    prettyValue = 'null';
  } else {
    prettyValue = value;
  }

  return prettyValue;
}

export default function({ propName, value }) {
  const valueType = value === null ? 'null-value' : typeof value;

  return (
    <div className="label">
      <span className="prop">{`${propName}:`}</span>
      <span className={`value ${valueType}`}>{prettyValue(value)}</span>
    </div>
  );
};
