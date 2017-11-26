import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-service-demo-4',
  templateUrl: './service-demo-4.component.html',
  styleUrls: ['./service-demo-4.component.css']
})
export class ServiceDemo4Component implements OnInit {
  memberList: any;
  constructor(
    @Inject('API_URL') private apiDomain: string,
    private api: ApiService
  ) { }

  ngOnInit() {
    console.log('this.api.getMember(): ', this.api.getMember());
  }

}
