import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgMarineComponent } from './rg-marine.component';

describe('RgMarineComponent', () => {
  let component: RgMarineComponent;
  let fixture: ComponentFixture<RgMarineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgMarineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgMarineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
