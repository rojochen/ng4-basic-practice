import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { LogService } from '../log.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
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
    private api: IService,
    private Log: LogService
  ) { }

  ngOnInit() {
    this.api.getMember().subscribe(res => {
      this.memberList = res;
    });
    this.memberList2 = this.api.getMember();

    this.api.getPromiseMember().then(res => {
      this.memberList3 = res;
    });
    this.api.getPostMember().subscribe(res => {
      this.Log.error(res);
    });
    this.forkJoin();
  }
  //forkJoin = promise.all([])
  forkJoin() {
    Observable.forkJoin([this.api.getMember(), this.api.getPromiseMember()])
    .subscribe(results => {
      console.error('results: ', results);
    });
  }

}
