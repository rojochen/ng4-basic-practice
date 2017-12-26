import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo-1',
  templateUrl: './component-demo-1.component.html',
  styleUrls: ['./component-demo-1.component.css']
})
export class ComponentDemo1Component implements OnInit {
  name: string;
  values: string;
  imgUrl: string;
  heroInput: string;
  constructor() {
  }
  init(): void {
    console.log('hello');
  }
  getVal(): number {
    return 2;
  }
  keydown(): void {
    alert('focus events');
  }
  call(phone: string): void {
    alert(phone);
  }
  ngOnInit() {
    this.name = 'roger';
    this.heroInput = 'Heloow';
    this.values = '';
    this.imgUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  }
  keyup(value: string): void {
   this.values =  this.values + value;
  }
  say(): void {
    alert('Hello World');
  }
  myFunction(): void {
    alert('copy text');
  }

}
