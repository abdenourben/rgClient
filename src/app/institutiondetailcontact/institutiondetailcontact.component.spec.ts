import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutiondetailcontactComponent } from './institutiondetailcontact.component';

describe('InstitutiondetailcontactComponent', () => {
  let component: InstitutiondetailcontactComponent;
  let fixture: ComponentFixture<InstitutiondetailcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutiondetailcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutiondetailcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
