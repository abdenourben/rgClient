import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgAnimaleDetailsComponent } from './rg-animale-details.component';

describe('RgAnimaleDetailsComponent', () => {
  let component: RgAnimaleDetailsComponent;
  let fixture: ComponentFixture<RgAnimaleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgAnimaleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgAnimaleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
