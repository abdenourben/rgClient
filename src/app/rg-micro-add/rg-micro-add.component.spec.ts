import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgMicroAddComponent } from './rg-micro-add.component';

describe('RgMicroAddComponent', () => {
  let component: RgMicroAddComponent;
  let fixture: ComponentFixture<RgMicroAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgMicroAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgMicroAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
