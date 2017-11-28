import { TestBed, inject } from '@angular/core/testing';
import { SmsServiceProviderService } from './sms-service-provider.service';

describe('SmsServiceProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmsServiceProviderService]
    });
  });

  it('should be created', inject([SmsServiceProviderService], (service: SmsServiceProviderService) => {
    expect(service).toBeTruthy();
  }));
});
