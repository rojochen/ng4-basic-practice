import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  C: any;
  constructor() {
    this.C = console;
  }
  debug(str: string | number): void {
    this.C.log(str);
  }
  info(str: string | number): void {
    this.C.info(str);
  }
  warn(str: string | number): void {
    this.C.warn(str);
  }
  error(str: string | number): void {
    this.C.error(str);
  }
}
