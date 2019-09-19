import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionAddComponent } from './institution-add.component';

describe('InstitutionAddComponent', () => {
  let component: InstitutionAddComponent;
  let fixture: ComponentFixture<InstitutionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
