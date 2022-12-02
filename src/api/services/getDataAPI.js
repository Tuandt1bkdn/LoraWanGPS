import http from "../request";

export function getFullData() {
  return http.get("/data");
}

export function getDataNow() {
  return http.get("/data2");
}

export function getDataTable() {
  return http.get("/data1");
}
export function LoginManager() {
  return http.get("/login");
}
