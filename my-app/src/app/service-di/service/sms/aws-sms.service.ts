import { Injectable } from '@angular/core';
import { IPrintable } from '../interfaces/iprintables';
import { ISendable } from '../interfaces/isendable';
@Injectable()
export class AwsSmsService implements IPrintable, ISendable {
  constructor() { }
  printMessage(): void {
    console.log('Print AWS Message');
  }

  sendMessage(): string {
    return 'Send AWS Message';
  }
}
