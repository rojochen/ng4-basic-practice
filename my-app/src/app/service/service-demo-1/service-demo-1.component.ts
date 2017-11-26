import { Component, OnInit, Inject } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-service-demo-1',
  templateUrl: './service-demo-1.component.html',
  styleUrls: ['./service-demo-1.component.css']
})
export class ServiceDemo1Component implements OnInit {

  constructor( @Inject('UseFactory') useFactory, private Log: LogService) {
    this.Log.debug('useClassService');
    this.Log.debug(useFactory);
  }

  ngOnInit() {
  }

}
