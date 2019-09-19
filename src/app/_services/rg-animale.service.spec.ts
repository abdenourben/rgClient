import { TestBed } from '@angular/core/testing';

import { RgAnimaleService } from './rg-animale.service';

describe('RgAnimaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RgAnimaleService = TestBed.get(RgAnimaleService);
    expect(service).toBeTruthy();
  });
});
