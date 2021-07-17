import request from "./ajax";
// 三级菜单请求
export const reqCategory = () => request({ url: "/product/getBaseCategoryList", method: "get" });
