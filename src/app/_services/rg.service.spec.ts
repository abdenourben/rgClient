import { TestBed } from '@angular/core/testing';

import { RgService } from './rg.service';

describe('RgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RgService = TestBed.get(RgService);
    expect(service).toBeTruthy();
  });
});
