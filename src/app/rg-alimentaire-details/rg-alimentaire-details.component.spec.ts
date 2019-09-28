import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgAlimentaireDetailsComponent } from './rg-alimentaire-details.component';

describe('RgAlimentaireDetailsComponent', () => {
  let component: RgAlimentaireDetailsComponent;
  let fixture: ComponentFixture<RgAlimentaireDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgAlimentaireDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgAlimentaireDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
