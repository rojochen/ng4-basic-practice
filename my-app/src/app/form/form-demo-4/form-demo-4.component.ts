import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo-4',
  templateUrl: './form-demo-4.component.html',
  styleUrls: ['./form-demo-4.component.css']
})
export class FormDemo4Component implements OnInit {
  user: FormGroup;
  constructor(private fb: FormBuilder) {
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required]
      })
    });
  }

  ngOnInit() {
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
