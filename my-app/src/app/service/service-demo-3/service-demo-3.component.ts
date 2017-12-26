import { Component, OnInit, Input } from '@angular/core';
import { LoggerService } from '../provider/logger.service';
@Component({
  selector: 'app-service-demo-3',
  templateUrl: './service-demo-3.component.html',
  styleUrls: ['./service-demo-3.component.css']
})
export class ServiceDemo3Component implements OnInit {
  @Input() apiUrl: string;

  constructor(private Log: LoggerService) { }

  ngOnInit() {
    this.apiUrl = this.apiUrl || '';
    this.Log.error('service-demo-3 apiUrl: ' + this.apiUrl);
  }

}
