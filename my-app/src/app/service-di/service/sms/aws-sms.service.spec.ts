import { TestBed, inject } from '@angular/core/testing';

import { AwsSmsService } from './aws-sms.service';

describe('AwsSmsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AwsSmsService]
    });
  });

  it('should be created', inject([AwsSmsService], (service: AwsSmsService) => {
    expect(service).toBeTruthy();
  }));
});
