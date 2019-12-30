import { TestBed } from '@angular/core/testing';

import { JSBAngularFlipClockService } from './jsb-angular-flip-clock.service';

describe('JSBAngularFlipClockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JSBAngularFlipClockService = TestBed.get(JSBAngularFlipClockService);
    expect(service).toBeTruthy();
  });
});
