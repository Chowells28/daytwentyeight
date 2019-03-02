import { TestBed } from '@angular/core/testing';

import { BrillianceValuesService } from './brilliance-values.service';

describe('BrillianceValuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrillianceValuesService = TestBed.get(BrillianceValuesService);
    expect(service).toBeTruthy();
  });
});
