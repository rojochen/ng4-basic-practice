import { TestBed, inject } from '@angular/core/testing';

import { ApiTimeInterceptorService } from './api-time-interceptor.service';

describe('ApiTimeInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiTimeInterceptorService]
    });
  });

  it('should be created', inject([ApiTimeInterceptorService], (service: ApiTimeInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
