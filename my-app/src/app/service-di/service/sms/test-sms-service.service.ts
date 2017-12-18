import { Injectable } from '@angular/core';
import { IPrintable } from '../interfaces/iprintables';
import { ISendable } from '../interfaces/isendable';

@Injectable()
export class TestSmsService implements IPrintable, ISendable {
  sendMessage(): string {
     return 'Send Testing message';
  }
  printMessage() {
     console.log('SMS TESTING - Print Message');
  }
  constructor() { }

}
