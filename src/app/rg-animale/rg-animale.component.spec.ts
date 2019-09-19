import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgAnimaleComponent } from './rg-animale.component';

describe('RgAnimaleComponent', () => {
  let component: RgAnimaleComponent;
  let fixture: ComponentFixture<RgAnimaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgAnimaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgAnimaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
