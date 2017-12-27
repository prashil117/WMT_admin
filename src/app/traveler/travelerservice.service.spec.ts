import { TestBed, inject } from '@angular/core/testing';

import { TravelerserviceService } from './travelerservice.service';

describe('TravelerserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelerserviceService]
    });
  });

  it('should be created', inject([TravelerserviceService], (service: TravelerserviceService) => {
    expect(service).toBeTruthy();
  }));
});
