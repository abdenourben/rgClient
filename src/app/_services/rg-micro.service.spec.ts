import { TestBed } from '@angular/core/testing';

import { RgMicroService } from './rg-micro.service';

describe('RgMicroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RgMicroService = TestBed.get(RgMicroService);
    expect(service).toBeTruthy();
  });
});
