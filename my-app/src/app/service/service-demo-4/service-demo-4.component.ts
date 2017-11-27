import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';
import { LogService } from '../log.service';
@Component({
  selector: 'app-service-demo-4',
  templateUrl: './service-demo-4.component.html',
  styleUrls: ['./service-demo-4.component.css']
})
export class ServiceDemo4Component implements OnInit {
  memberList: any;
  memberList2: Observable<any>;
  memberList3: any;
  constructor(
    @Inject('API_URL') private apiDomain: string,
    private api: ApiService,
    private Log: LogService
  ) { }

  ngOnInit() {
    this.api.getMember().subscribe(res => {
      this.memberList = res;
    });
    this.memberList2 = this.api.getMember();
    this.api.getPromiseMember().then(res => {
      this.Log.error(res);
      this.memberList3 = res;
    });
  }

}