import { Injectable, Inject } from '@angular/core';
import { ISendable } from '../interfaces/isendable';
@Injectable()
export class NotificationService {
  smsService: ISendable = null;
  constructor( @Inject('ISendable')smsService: ISendable) {
      this.smsService = smsService;
  }
  showMessage(): string {
    return this.smsService.sendMessage();
  }
}
