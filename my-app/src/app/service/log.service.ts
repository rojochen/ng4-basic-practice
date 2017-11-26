import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  C: any;
  constructor() {
    this.C = console;
  }
  log(str): void {
    this.C.log(str);
  }
  info(str): void {
    this.C.info(str);
  }
  warn(str): void {
    this.C.warn(str);
  }
  error(str): void {
    this.C.error(str);
  }
}
