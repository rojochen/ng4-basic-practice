import { Injectable } from '@angular/core';
import { IPrintable } from '../interfaces/iprintables';
import { ISendable } from '../interfaces/isendable';
@Injectable()
export class AzureSmsService implements IPrintable, ISendable {

  constructor() { }
  printMessage() {
    console.log('Print Azure Message');
  }

  sendMessage(): string {
    return 'Send Azure Message';
  }
}
