import { get } from "./http";

//头部输入框下拉列表数据获取
export const getHeaderSearchList = () => get("/api/searchList");

//首页标签数据获取
export const getLabelsList = () => get("/api/labelsList");
