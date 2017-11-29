import { Injectable } from '@angular/core';
import { ILogger } from '../interface/ILogger';

@Injectable()
export class LoggerService implements ILogger {

  constructor() { }
  debug(msg) {
    console.log(msg);
  }
  error(msg) {
    console.error(msg);
  }
}
