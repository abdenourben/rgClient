import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionAjouterComponent } from './institution-ajouter.component';

describe('InstitutionAjouterComponent', () => {
  let component: InstitutionAjouterComponent;
  let fixture: ComponentFixture<InstitutionAjouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionAjouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
