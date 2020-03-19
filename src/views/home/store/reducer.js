import defaultState from "./state";
import * as types from "./action-types";

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.LABELS_LIST:
      return state.set('labelsList',action.list);
    default:
      return state;
  }
};
