import { TestBed, inject } from '@angular/core/testing';

import { AzureSmsService } from './azure-sms.service';

describe('AzureSmsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AzureSmsService]
    });
  });

  it('should be created', inject([AzureSmsService], (service: AzureSmsService) => {
    expect(service).toBeTruthy();
  }));
});
