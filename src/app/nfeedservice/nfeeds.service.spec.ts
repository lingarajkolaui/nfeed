import { TestBed } from '@angular/core/testing';

import { NfeedsService } from './nfeeds.service';

describe('NfeedsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NfeedsService = TestBed.get(NfeedsService);
    expect(service).toBeTruthy();
  });
});
