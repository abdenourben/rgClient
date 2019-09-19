import { TestBed } from '@angular/core/testing';

import { RgForetService } from './rg-foret.service';

describe('RgForetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RgForetService = TestBed.get(RgForetService);
    expect(service).toBeTruthy();
  });
});
