// demo inject and 4 provide
import { Component, OnInit, Inject } from '@angular/core';
import { LoggerService } from '../provider/logger.service';
import { RandomMath } from '../provider/random-math.service';

@Component({
  selector: 'app-service-demo-1',
  templateUrl: './service-demo-1.component.html',
  styleUrls: ['./service-demo-1.component.css'],
  providers: [
    LoggerService, //如果 token name 等同useClass 是可以縮寫成這樣
    { provide: 'API_URL', useValue: 'https://jsonplaceholder.typicode.com' },  //useValue by srting
    { provide: 'UseValueByNumber', useValue: 10 },  //useValue by number
    { provide: 'UseValueByObj', useValue: { name: 'object' } },  //useValue by {}
    { provide: 'RandomMath', useFactory: RandomMath, deps: [LoggerService] }, //useFactory
    { provide: 'LogServiceAlias', useExisting: LoggerService }, // useExisting
  ]
})
export class ServiceDemo1Component implements OnInit {
  title: string;
  constructor(
    private Log: LoggerService,
    @Inject('API_URL') private apiDomain: string, //useValue
    @Inject('UseValueByNumber') private UseValueByNumber: number, //useValue
    @Inject('UseValueByObj') private UseValueByObj: object, //useValue
    @Inject('RandomMath') private randomMath: number,
    @Inject('LogServiceAlias') private logServiceAlias: LoggerService
  ) { }

  ngOnInit() {
    this.title = 'Service inject demo';
    this.Log.debug(this.title);
    this.Log.debug('apiDomain= ' + this.apiDomain);
    this.Log.debug('UseValueByNumber= ' + this.UseValueByNumber);
    this.Log.debug('UseValueByObj= ' + this.UseValueByObj);
    this.logServiceAlias.debug('logServiceAlias');
  }

}
