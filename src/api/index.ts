//@ts-ignore
import io from 'socket.io-client'
//@ts-ignore
import { clientEmitNames } from '../event-names';

const config = {
  url: 'http://localhost:3000';
}

type ListenerFunc = (data: any) => void;

interface IListeners {
  [key:string]: ListenerFunc[];
}

class Api {
  private eventNames: string[] = Object.keys(clientEmitNames);

  private listeners: IListeners = {};

  private socket:any;

  constructor(param: any) {
    this.socket = io.connect(param.url);
    this.makeListeners()
  }

  private makeListeners() {
    this.eventNames.forEach(eventName => {
      this.socket.on(eventName, (data: any) => {
        if (this.listeners[eventName]) {
          this.listeners[eventName].forEach(func => func(data))
        }
      });
    });
  }

  subscribe(eventName: string, func: ListenerFunc) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }

    const listeners = this.listeners[eventName];

    if (listeners.indexOf(func) === -1) {
      listeners.push(func);
    }

    return () => {
      const index = listeners.indexOf(func);
      listeners.splice(index, 1);
      return index;
    }
  }

  getUserList() {
    this.socket.emit('get.userList');
  }
}

export const api = new Api(config);
