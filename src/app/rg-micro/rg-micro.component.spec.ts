import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgMicroComponent } from './rg-micro.component';

describe('RgMicroComponent', () => {
  let component: RgMicroComponent;
  let fixture: ComponentFixture<RgMicroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgMicroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgMicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
