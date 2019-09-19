import { TestBed } from '@angular/core/testing';

import { RgMarineService } from './rg-marine.service';

describe('RgMarineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RgMarineService = TestBed.get(RgMarineService);
    expect(service).toBeTruthy();
  });
});
