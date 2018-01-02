import { TestBed, inject } from '@angular/core/testing';

import { EmailserviceService } from './emailservice.service';

describe('EmailserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailserviceService]
    });
  });

  it('should be created', inject([EmailserviceService], (service: EmailserviceService) => {
    expect(service).toBeTruthy();
  }));
});
