import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionDetailComponent } from './institution-detail.component';

describe('InstitutionDetailComponent', () => {
  let component: InstitutionDetailComponent;
  let fixture: ComponentFixture<InstitutionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
