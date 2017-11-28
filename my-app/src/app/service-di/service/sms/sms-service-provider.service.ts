import { Injectable } from '@angular/core';
import { IPrintable } from '../interfaces/iprintables';
import { ISendable } from '../interfaces/isendable';
@Injectable()
export class SmsServiceProviderService implements IPrintable, ISendable {

  constructor() { }
  printMessage(): void {
    console.log('Print Message');
  }

  sendMessage(): string {
    return 'Send Message';
  }
}
