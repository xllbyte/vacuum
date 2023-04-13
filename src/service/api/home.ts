import { requestFinal } from '@/service/request/init';

/**
 * @returns - 返回true or false
 * @param key
 */
export function getMsg() {
  return requestFinal.get<boolean>(`/tab/get`);
}

export function postJson(key: object) {
  return requestFinal.post<object>('/tab/getAll', key);
}

export function saveJson(key: object) {
  return requestFinal.post<object>('/tab/plcSave', key);
}

export function keepGetting(tagName: string, key: Object) {
  return requestFinal.post<object>(`/tab/keepGetting?tagName=${tagName}`, key);
}

export function fileSave(fileName: string) {
  return requestFinal.post<string>(`/file/save?fileName=${fileName}`);
}

export function queryAllFile() {
  return requestFinal.get<boolean>(`/file/getAllFileName`);
}

export function fileParam(fileName: string) {
  return requestFinal.post<string>(`/file/getFileInfo?fileName=${fileName}`);
}
