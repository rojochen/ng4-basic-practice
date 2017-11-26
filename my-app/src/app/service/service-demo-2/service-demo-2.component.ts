import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-service-demo-2',
  templateUrl: './service-demo-2.component.html',
  styleUrls: ['./service-demo-2.component.css'],
  providers: [UserService]
})
export class ServiceDemo2Component implements OnInit {

  constructor(private user: UserService) { }
  memberList: Array<{ name: string }>;
  ngOnInit() {
    this.memberList = this.user.getMemberList();
  }
  memberChange(e) {
    this.memberList = e;
  }
}
