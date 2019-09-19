import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgComponent } from './rg.component';

describe('RgComponent', () => {
  let component: RgComponent;
  let fixture: ComponentFixture<RgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
