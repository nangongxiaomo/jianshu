import * as types from "./action-types";
import { getLabelsList } from "../../../http/api";
import { ERR_OK } from "../../../http/config";
import { fromJS } from "immutable";

export const getLabelList = () => {
  return dispatch => {
    getLabelsList().then(res => {
      if (res.code === ERR_OK) {
        dispatch(_labelList(res.list));
      }
    });
  };
};

const _labelList = list => ({
  type: types.LABELS_LIST,
  list: fromJS(list)
});
