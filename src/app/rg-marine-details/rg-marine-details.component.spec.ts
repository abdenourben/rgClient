import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgMarineDetailsComponent } from './rg-marine-details.component';

describe('RgMarineDetailsComponent', () => {
  let component: RgMarineDetailsComponent;
  let fixture: ComponentFixture<RgMarineDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgMarineDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgMarineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
