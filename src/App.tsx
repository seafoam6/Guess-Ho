import React, { useReducer, useMemo } from "react";
import "./styles/App.css";

import Card from "./Card";
import { initialState, cardReducer } from "./ducks/reducer";
import { reset } from "./ducks/actions";

function useSelectors(reducer, mapStateToSelectors) {
  const [state] = reducer;
  const selectors = useMemo(() => mapStateToSelectors(state), [state]);
  return selectors;
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(cardReducer, initialState);
  const cards = state.ids.map(name => state.byId[name]);
  const handleClick = e => {
    console.log(e);
    dispatch(reset);
  };
  return (
    <div className="app">
      {cards.map(cardData => (
        <Card key={cardData.name} {...cardData} />
      ))}
    </div>
  );
};

export default App;
