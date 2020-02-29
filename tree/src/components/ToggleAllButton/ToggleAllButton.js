import React, { useContext } from 'react';

import ToggleAllContext from '../../context/ToggleAllContext';

import './ToggleButton.css';

export default function({ canBeExpanded }) {
  const { toggleAll, setToggleAll } = useContext(ToggleAllContext);
  // don't wait for all elements to be expanded, when expand/collapse all is triggered
  const showExpandAll = toggleAll !== null ? !toggleAll : canBeExpanded;

  const handleClick = () => setToggleAll(canBeExpanded);

  return (
    <div className={`btn toggle-btn br-5 ${showExpandAll ? 'green' : 'orange'}`} onClick={handleClick}>
      {showExpandAll ? 'Expand all' : 'Collapse all'}
    </div>
  );
}
