import React, { useReducer, useMemo, useCallback } from "react";
import "./styles/App.scss";

import Top from "./Top";
import Card from "./Card";
import { initialState, cardReducer } from "./ducks/reducer";
import { reset, toggleQueen } from "./ducks/actions";

function useSelectors(reducer, mapStateToSelectors) {
  const [state] = reducer;
  const selectors = useMemo(() => mapStateToSelectors(state), [state]);
  return selectors;
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(cardReducer, initialState);
  const cards = state.ids.map(name => state.byId[name]);
  const { selected } = state;
  const handleClick = title => {
    dispatch(toggleQueen(title));
  };

  const resetBoard = () => {
    dispatch(reset());
  };
  return (
    <>
      <div className="app">
        <Top selected={selected} buttonClick={() => resetBoard()} />
        {cards.map(cardData => (
          <Card
            key={cardData.name}
            handleClick={() => handleClick(cardData.name)}
            {...cardData}
          />
        ))}
        {/* <Card {...cards[0]} handleClick={() => handleClick(cards[0].name)} /> */}
      </div>
      <footer>
        <p>
          Made with love by <a href="https://stevebarman.com">Steve Barman</a>.{" "}
          <a href="https://github.com/seafoam6/Guess-Ho">
            Fork this project on Github
          </a>
          .
        </p>
      </footer>
    </>
  );
};

export default App;
