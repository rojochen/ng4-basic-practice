import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form-demo-2',
  templateUrl: './form-demo-2.component.html',
  styleUrls: ['./form-demo-2.component.css']
})
export class FormDemo2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // form Submit
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    // 表單成功才進行下一步
    if (f.valid) {
      // do something
      alert('表單檢核成功!');
    } else {
      alert('表單檢核失敗!');
    }
  }
}
