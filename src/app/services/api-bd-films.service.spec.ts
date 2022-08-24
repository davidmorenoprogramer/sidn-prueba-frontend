import { TestBed } from '@angular/core/testing';

import { ApiBdFilmsService } from './api-bd-films.service';

describe('ApiBdFilmsService', () => {
  let service: ApiBdFilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBdFilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
