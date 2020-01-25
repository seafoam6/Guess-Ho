import produce from "immer";
import Queens from "../Queens";
import { Queen } from "Models";

interface QueenState extends Queen {
  active: boolean;
}

const base = { byId: {}, ids: [] };

export const initialState: {
  ids: Array<string>;
  byId: {
    [id: string]: QueenState;
  };
} = produce(base, draft => {
  const names = Object.keys(Queens);
  names.forEach(name => {
    base.byId[name] = Queens[name];
    base.byId[name].active = false;

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
        draft.ids.forEach(name => {
          draft.byId[name].active = false;
        });
        return draft;
      }
    }
  });
