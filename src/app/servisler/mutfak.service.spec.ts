import { TestBed } from '@angular/core/testing';

import { MutfakService } from './mutfak.service';

describe('MutfakService', () => {
  let service: MutfakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MutfakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
