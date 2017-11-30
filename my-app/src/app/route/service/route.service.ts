import { Injectable } from '@angular/core';
import { ARoute } from './ARoute';
import { Location } from '@angular/common';
@Injectable()
export class RouteService implements ARoute{

  constructor(private location: Location) { }
  goBack(): void {
    this.location.back();
  }
}
