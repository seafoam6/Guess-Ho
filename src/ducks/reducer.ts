import produce from "immer";
import Queens from "../Queens";
import { Queen } from "Models";
import { shuffle } from "lodash";

interface QueenState extends Queen {
  active: boolean;
}

const base = { byId: {}, ids: [], selected: null };

export const initialState: {
  ids: Array<string>;
  byId: {
    [id: string]: QueenState;
  };
  selected: Queen;
} = produce(base, draft => {
  const names = Object.keys(Queens);
  const shuffled = shuffle(names);
  const rand = names[Math.floor(Math.random() * names.length)];
  base.selected = Queens[rand];
  shuffled.forEach(name => {
    base.byId[name] = Queens[name];
    base.byId[name].active = true;
    base.ids.push(name);
  });
});

export const cardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "toggle": {
        draft.byId[action.payload.name].active = !draft.byId[
          action.payload.name
        ].active;
        return draft;
      }
      case "reset": {
        const shuffled = shuffle(draft.ids);
        draft.selected = Queens[shuffled[0]];
        draft.ids.forEach(name => {
          draft.byId[name].active = true;
        });
        return draft;
      }
    }
  });
