import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgAnimaleAddComponent } from './rg-animale-add.component';

describe('RgAnimaleAddComponent', () => {
  let component: RgAnimaleAddComponent;
  let fixture: ComponentFixture<RgAnimaleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgAnimaleAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgAnimaleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
