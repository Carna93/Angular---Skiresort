import { TestBed } from '@angular/core/testing';

import { SkiresortService } from './skiresort.service';

describe('SkiresortService', () => {
  let service: SkiresortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkiresortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
