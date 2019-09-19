import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutiondetailprofileComponent } from './institutiondetailprofile.component';

describe('InstitutiondetailprofileComponent', () => {
  let component: InstitutiondetailprofileComponent;
  let fixture: ComponentFixture<InstitutiondetailprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutiondetailprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutiondetailprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
