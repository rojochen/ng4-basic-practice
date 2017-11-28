import { Component, OnInit } from '@angular/core';
import { NotificationService } from './service/notification/notification.service';
import { ISendable } from './service/interfaces/isendable';
import { SmsServiceProviderService } from './service/sms/sms-service-provider.service';
import { AwsSmsService } from './service/sms/aws-sms.service';
@Component({
  selector: 'app-service-di',
  templateUrl: './service-di.component.html',
  styleUrls: ['./service-di.component.css'],
  providers: [
    NotificationService,
    { provide: ISendable, useClass: AwsSmsService }
  ]

})
export class ServiceDiComponent implements OnInit {
  message: string;
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.message = this.notificationService.showMessage();
  }

}
