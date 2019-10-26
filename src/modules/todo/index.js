import { handleActions } from "redux-actions";
import produce from "immer";

import * as types from "modules/todo/actions";

const initialState = [{}];

export default handleActions(
  {
    [types.CREATE]: (state, action) => {
      return produce(state, draftState => {});
    },
    [types.UPDATE]: (state, action) => {
      return produce(state, draftState => {});
    },
    [types.REMOVE]: (state, action) => {
      return produce(state, draftState => {});
    }
  },
  initialState
);
