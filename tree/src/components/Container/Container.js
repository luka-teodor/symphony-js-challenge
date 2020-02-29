import React, { useState, useContext, useEffect, useRef } from 'react';

import Label from '../Label/Label';
import CounterContext from '../../context/CounterContext';
import ToggleAllContext from '../../context/ToggleAllContext';
import { INCR, DECR } from '../../reducers/countReducer';

import './Container.css';
import ContainerBody from './ContainerBody';
import ContainerHeader from './ContainerHeader';

export default function Container({ propName, data }) {
  const [ isExpanded, setExpanded ] = useState(false);
  const { countDispatch } = useContext(CounterContext);
  const { toggleAll, setToggleAll } = useContext(ToggleAllContext);
  const expandedRef = useRef(false);

  const dispatchExpanded = (isExpanded) => {
    // change expanded count
    countDispatch({ type: isExpanded ? INCR : DECR });
  }

  // update
  useEffect(() => {
    if(expandedRef.current !== isExpanded) {
      dispatchExpanded(isExpanded);
    }

    // change state if extend/collapse all button triggered
    if (toggleAll !== null && toggleAll !== isExpanded) {
      setExpanded(toggleAll);
    }

    // keep tracking state for proper unmount and update
    expandedRef.current = isExpanded;
  }, [isExpanded, toggleAll]);

  // unmount
  useEffect(() => {
    return function() {
      // decrement extended count if container was in expanded state
      expandedRef.current && dispatchExpanded(false);
    }
  }, []);

  // recursive content builder
  const renderContent = () => {
    const entries = Object.keys(data);

    if (entries.length) {
      return entries.map(key => {
        const value = data[key];

        // objects and arrays
        if (value && typeof value === 'object') {
          return <Container key={key} propName={key} data={value}/>
        }
        // primitives
        return <Label key={key} propName={key} value={value}/>
      });
    }
    return null;
  }

  const handleClick = () => {
    // reset toggle all
    toggleAll !== null && setToggleAll(null);
    // change state
    setExpanded(!isExpanded);
  }

  return (
    <div className="expandable shadow br-5">
      <ContainerHeader
        propName={propName}
        isExpanded={isExpanded}
        isList={data instanceof Array}
        handleClick={handleClick}
      />
      {isExpanded && <ContainerBody>{renderContent()}</ContainerBody>}
    </div>
  );
}
