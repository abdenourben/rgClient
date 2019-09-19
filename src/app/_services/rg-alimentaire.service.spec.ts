import { TestBed } from '@angular/core/testing';

import { RgAlimentaireService } from './rg-alimentaire.service';

describe('RgAlimentaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RgAlimentaireService = TestBed.get(RgAlimentaireService);
    expect(service).toBeTruthy();
  });
});
