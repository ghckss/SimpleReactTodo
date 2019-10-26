import { createAction } from "redux-actions";

export const CREATE = "todo/CREATE";
export const UPDATE = "todo/UPDATE";
export const REMOVE = "todo/REMOVE";

export const create = createAction(CREATE);
export const update = createAction(UPDATE);
export const remove = createAction(REMOVE);
