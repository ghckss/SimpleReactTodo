import { handleActions } from "redux-actions";
import produce from "immer";

import * as types from "modules/todo/actions";

const initialState = [];

export default handleActions(
  {
    [types.CREATE]: (state, action) => {
      return produce(state, draftState => {
        const content = action.payload;
        draftState.push({ content: content });
      });
    },
    [types.UPDATE]: (state, action) => {
      return produce(state, draftState => {});
    },
    [types.REMOVE]: (state, action) => {
      return produce(state, draftState => {
        const index = action.payload;
        draftState.splice(index, 1);
      });
    }
  },
  initialState
);
