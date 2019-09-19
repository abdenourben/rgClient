import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgForetDetailsComponent } from './rg-foret-details.component';

describe('RgForetDetailsComponent', () => {
  let component: RgForetDetailsComponent;
  let fixture: ComponentFixture<RgForetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgForetDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgForetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
