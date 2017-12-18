 
import { AzureSmsService } from './service/sms/azure-sms.service';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from './service/notification/notification.service';
import { ISendable } from './service/interfaces/isendable';
import { AwsSmsService } from './service/sms/aws-sms.service';
import { TestSmsService } from './service/sms/test-sms-service.service';

@Component({
  selector: 'app-service-di',
  templateUrl: './service-di.component.html',
  styleUrls: ['./service-di.component.css'],
  providers: [
    { provide: 'ISendable', useClass: TestSmsService },
    NotificationService
  ]

})
export class ServiceDiComponent implements OnInit {
  message: string;
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.message = this.notificationService.showMessage();
  }

}
