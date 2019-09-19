import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgMicroDetailsComponent } from './rg-micro-details.component';

describe('RgMicroDetailsComponent', () => {
  let component: RgMicroDetailsComponent;
  let fixture: ComponentFixture<RgMicroDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgMicroDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgMicroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
