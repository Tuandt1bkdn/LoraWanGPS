import http from "../request";

export function getFullData() {
  return http.get("/data");
}

export function getDataNow() {
  return http.get("/datanow");
}

export function getDataTable() {
  return http.get("/data1");
}
export function LoginManager() {
  return http.get("/login");
}

export function DriverManage() {
  return http.get("/usermanage");
}
