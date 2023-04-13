import { v4 as uuidv4 } from 'uuid';
import { getServiceEnvConfig } from '~/.env-config';

const { url } = getServiceEnvConfig(import.meta.env);
let socket: WebSocket | null = null;
let setIntervalWesocketPush: NodeJS.Timeout | null = null;
let currentUUId = '';
let activeClose = false;

/** 建立连接 */
export function createSocket(uuid: string): void {
  console.log('createSocket');
  if (!socket) {
    console.log('建立websocket连接');
    const wsUrl = url.replace('http://', '');
    console.log('socket地址', wsUrl);
    socket = new WebSocket(`ws://${wsUrl}/websocket/${uuid}`);
    currentUUId = uuid;
    socket.onopen = onopenWS;
    socket.onmessage = onmessageWS;
    socket.onerror = onerrorWS;
    socket.onclose = oncloseWS;
  } else {
    console.log('websocket已连接');
  }
}

/** 打开WS之后发送心跳 */
export function onopenWS(): void {
  sendPing(); // 发送心跳
}

/** 连接失败重连 */
export function onerrorWS(): void {
  clearInterval(setIntervalWesocketPush!);
  socket!.close();
  createSocket(currentUUId); // 重连
}

/** WS数据接收统一处理 */
export function onmessageWS(e: MessageEvent): void {
  window.dispatchEvent(
    new CustomEvent('onmessageWS', {
      detail: {
        data: e
      }
    })
  );
}

/** 发送数据
 * @param eventType
 */
export function sendWSPush(eventTypeArr: any[]): void {
  const obj = {
    appId: 'airShip',
    cover: 0,
    event: eventTypeArr
  };
  if (socket !== null && socket.readyState === WebSocket.CLOSED) {
    socket.close();
    createSocket(currentUUId); // 重连
  } else if (socket!.readyState === WebSocket.OPEN) {
    socket!.send(JSON.stringify(obj));
  } else if (socket!.readyState === WebSocket.CONNECTING) {
    setTimeout(() => {
      socket!.send(JSON.stringify(obj));
    }, 3000);
  }
}

/** 关闭WS */
export function oncloseWS(): void {
  clearInterval(setIntervalWesocketPush!);
  console.log(`websocket已断开${activeClose}`);
  if (!activeClose) {
    socket!.close();
    socket = null;
    createSocket(currentUUId);
  }
  activeClose = false;
}

export function sendPing(): void {
  socket!.send('ping');
  setIntervalWesocketPush = setInterval(() => {
    socket!.send('ping');
  }, 5000);
}

/** 主动关闭 */
export function closeSocket(): void {
  socket!.close();
  socket = null;
  activeClose = true;
}

export function guid(tagName: string): string {
  return `${tagName}-${uuidv4().substr(0, 8)}`;
}
