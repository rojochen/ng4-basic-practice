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
      name: new FormControl('', [Validators.required, Validators.minLength(2)]), // 必填 最小長度為2
      account: new FormGroup({
        email: new FormControl('', Validators.required), // 必填
        confirm: new FormControl('', Validators.required) // 必填
      })
    });
    // 監聽 user value  變化
    this.user.valueChanges.subscribe(value => console.log(value));
  }
  // form 表單送出
  onSubmit(formGropup: FormGroup) {
    if (!!formGropup.valid) {
      // do something
      alert('表單檢核成功!');
    } else {
      alert('ERROR!');
    }
  }

}
