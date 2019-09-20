import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgForetAddComponent } from './rg-foret-add.component';

describe('RgForetAddComponent', () => {
  let component: RgForetAddComponent;
  let fixture: ComponentFixture<RgForetAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgForetAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgForetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
