import { Component, OnInit } from '@angular/core';
import { User } from './signup.interface';

@Component({
  selector: 'app-form-demo-1',
  templateUrl: './form-demo-1.component.html',
  styleUrls: ['./form-demo-1.component.css']
})
export class FormDemo1Component implements OnInit {

  constructor() { }
  user: User = {
    name: 'Todd Motto',
    account: {
      email: '',
      confirm: ''
    }
  };
  ngOnInit() {
  }
  onSubmit(obj: any) {
    console.log(obj.value);
  }
}

