import { requestFinal } from '@/service/request/init';

export function queryAllUser() {
  return requestFinal.get<boolean>(`/user/queryAllUser`);
}

export function deleteUser(key: number) {
  return requestFinal.post<boolean>(`/user/delete?id=${key}`);
}

export function finalLogin(userName: string, password: string) {
  return requestFinal.post<ApiAuth.Token>('/user/login', { userName, password });
}

export function fetchRedisUserInfo() {
  return requestFinal.get<ApiAuth.UserInfo>('/user/getUserInfo');
}

export function fetchChangeUserInfo(userId: number) {
  return requestFinal.get<ApiAuth.UserInfo>(`/user/changeUserInfo?userId=${userId}`);
}
export function insertUser(key: object) {
  return requestFinal.post<ApiAuth.UserInfo>(`/user/insert`, key);
}

export function queryAllLog() {
  return requestFinal.get<[]>(`/log/queryLog`);
}
