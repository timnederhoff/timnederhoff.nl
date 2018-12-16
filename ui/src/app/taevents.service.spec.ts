import { TestBed } from '@angular/core/testing';

import { TaeventsService } from './taevents.service';

describe('TaeventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaeventsService = TestBed.get(TaeventsService);
    expect(service).toBeTruthy();
  });
});
