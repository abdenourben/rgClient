import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgForetComponent } from './rg-foret.component';

describe('RgForetComponent', () => {
  let component: RgForetComponent;
  let fixture: ComponentFixture<RgForetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgForetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgForetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
