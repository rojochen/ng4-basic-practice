import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
interface User {
  name: string;
  account: {
    email: string;
    confirm: string;
  };
}
@Component({
  selector: 'app-form-demo-3',
  templateUrl: './form-demo-3.component.html',
  styleUrls: ['./form-demo-3.component.css']
})
export class FormDemo3Component implements OnInit {

  constructor() { }
  user: FormGroup;
  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        account: new FormGroup({
          email: new FormControl('', Validators.required),
          confirm: new FormControl('', Validators.required)
        })
    });
    this.user.valueChanges.subscribe(value => console.log(value));
  }
  onSubmit(formGropup: FormGroup) {
    if ( formGropup.valid === true) {
      // do something
      alert('表單檢核成功!');
    }else {
      alert('ERROR!');
    }
  }

}
