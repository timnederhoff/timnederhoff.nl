import { TestBed } from '@angular/core/testing';

import { PersonaldataService } from './personaldata.service';

describe('PersonaldataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonaldataService = TestBed.get(PersonaldataService);
    expect(service).toBeTruthy();
  });
});
