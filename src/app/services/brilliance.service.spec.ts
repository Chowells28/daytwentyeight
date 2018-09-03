import { TestBed, inject } from '@angular/core/testing';

import { BrillianceService } from './brilliance.service';

describe('BrillianceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrillianceService]
    });
  });

  it('should be created', inject([BrillianceService], (service: BrillianceService) => {
    expect(service).toBeTruthy();
  }));
});
