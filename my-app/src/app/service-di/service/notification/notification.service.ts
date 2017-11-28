import { Injectable } from '@angular/core';
import { ISendable } from '../interfaces/isendable';
@Injectable()
export class NotificationService {

  constructor(private smsService: ISendable) {
  }
  showMessage(): string {
    return this.smsService.sendMessage();
  }
}
