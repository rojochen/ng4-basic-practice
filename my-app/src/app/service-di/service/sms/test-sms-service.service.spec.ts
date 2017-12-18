import { TestBed, inject } from '@angular/core/testing';

import { TestSmsService } from './test-sms-service.service';

describe('TestSmsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestSmsService]
    });
  });

  it('should be created', inject([TestSmsService], (service: TestSmsService) => {
    expect(service).toBeTruthy();
  }));
});
