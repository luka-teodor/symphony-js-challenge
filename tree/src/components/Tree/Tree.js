import React, { useReducer, useState, useEffect } from 'react';

import { getNestedItemsCount } from '../../utils/common';
import countReducer from '../../reducers/countReducer';
import CounterContext from '../../context/CounterContext';
import ToggleAllContext from '../../context/ToggleAllContext';
import ToggleAllButton from '../ToggleAllButton/ToggleAllButton';
import Container from '../Container/Container';

import './Tree.css';

export default function({ json = {} }) {
  const [ nestedItemsCount, setNestedItemCount ] = useState(0);
  const [ toggleAll, setToggleAll ] = useState(null);
  const [ expandedCount, countDispatch ] = useReducer(countReducer, 0);
  const canBeExpanded = nestedItemsCount !== expandedCount;

  useEffect(() => setNestedItemCount(getNestedItemsCount(json)), [json])

  return (
    <CounterContext.Provider value={{ countDispatch }}>
      <ToggleAllContext.Provider value={{ toggleAll, setToggleAll }}>
        <div className="tree shadow br-5">
          <ToggleAllButton canBeExpanded={canBeExpanded}/>
          <Container data={json}/>
        </div> 
      </ToggleAllContext.Provider>
    </CounterContext.Provider>
  );  
}
