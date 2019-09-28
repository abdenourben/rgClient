import { TestBed } from '@angular/core/testing';

import { RgVersionService } from './rg-version.service';

describe('RgVersionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RgVersionService = TestBed.get(RgVersionService);
    expect(service).toBeTruthy();
  });
});
