import { TestBed, inject } from '@angular/core/testing';

import { Dynamic2Service } from './dynamic2.service';

describe('Dynamic2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dynamic2Service]
    });
  });

  it('should be created', inject([Dynamic2Service], (service: Dynamic2Service) => {
    expect(service).toBeTruthy();
  }));
});
