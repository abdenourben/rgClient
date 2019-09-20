import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgMarineAddComponent } from './rg-marine-add.component';

describe('RgMarineAddComponent', () => {
  let component: RgMarineAddComponent;
  let fixture: ComponentFixture<RgMarineAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgMarineAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgMarineAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
