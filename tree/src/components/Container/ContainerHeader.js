import React from 'react';

export default function({ isExpanded, propName, isList, handleClick}) {
  return (
    <div className={`header br-5 ${isExpanded? 'shadow' : ''}`} onClick={handleClick}>
      <div>
        <span className="prop">{propName || 'root'}</span>
        {isList && <span className="prop-type">(list)</span>}
      </div>
      <span className={`btn br-5 ${isExpanded ? 'orange' : 'green'}`}>{isExpanded ? 'Collapse' : 'Expand'}</span>
   </div>
  );
}