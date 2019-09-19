import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgAlimentaireComponent } from './rg-alimentaire.component';

describe('RgAlimentaireComponent', () => {
  let component: RgAlimentaireComponent;
  let fixture: ComponentFixture<RgAlimentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgAlimentaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgAlimentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
