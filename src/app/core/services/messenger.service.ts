import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  public subject = new Subject();
  constructor() {}
  sendMsg(data: any) {
    this.subject.next(data);
  }
  getMsg() {
    return this.subject.asObservable();
  }
}
