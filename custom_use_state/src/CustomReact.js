import React from 'react';
import ReactDOM from 'react-dom';

const ReactObj = {
  bindedComponent: null,
  rootElement: null,
  index: 0,
  states: [],

  init(component, rootDOMElement = document.getElementById('root')) {
    if (!component) {
      throw new Error("Provide component for init()!")
    }
    this.bindedComponent = component;
    this.rootDOMElement = rootDOMElement;
  },

  useState(initialState) {
    // useState init
    if (this.index === this.states.length) {
      const state = [
        initialState,
        function(newState) {
          // update value using closures
          state[0] = newState;
          // reset index when component updates, to skip useState init block
          ReactObj.index = 0;
          // rerender the component
          if (!ReactObj.bindedComponent || !ReactObj.rootDOMElement) {
            throw new Error("You should init ReactObj before using useState")
          }
          ReactDOM.render(<ReactObj.bindedComponent />, ReactObj.rootDOMElement);
        }
      ];

      this.states.push(state);
    }

    // get states
    const state = this.states[this.index];
    this.index++;
    return state;
  }
};

export default ReactObj;

export const useState = ReactObj.useState.bind(ReactObj);

export const init = ReactObj.init.bind(ReactObj);
