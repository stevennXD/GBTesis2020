import { TestBed } from '@angular/core/testing';

import { LinesServiceService } from './lines-service.service';

describe('LinesServiceService', () => {
  let service: LinesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
