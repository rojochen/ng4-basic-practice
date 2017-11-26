import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-service-demo-3',
  templateUrl: './service-demo-3.component.html',
  styleUrls: ['./service-demo-3.component.css']
})
export class ServiceDemo3Component implements OnInit {
  @Input() member;
  @Output() result = new EventEmitter();
  userName: string;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }
  addMember() {
    if (!this.userName) {
      return;
    }
    this.userService.addMember(this.userName);
    this.result.emit(this.userService.getMemberList());
    this.userName = null;
  }

}
