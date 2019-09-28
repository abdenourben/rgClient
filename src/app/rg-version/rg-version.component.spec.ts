import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgVersionComponent } from './rg-version.component';

describe('RgVersionComponent', () => {
  let component: RgVersionComponent;
  let fixture: ComponentFixture<RgVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
