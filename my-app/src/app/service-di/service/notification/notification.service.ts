import { Injectable, Inject } from '@angular/core';
import { ISendable } from '../interfaces/isendable';
@Injectable()
export class NotificationService {
  sender: ISendable = null;
  constructor( @Inject('ISendable')sender: ISendable) {
      this.sender = sender;
  }
  showMessage(): string {
    return this.sender.sendMessage();
  }
}
