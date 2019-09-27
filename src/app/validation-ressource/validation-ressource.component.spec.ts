import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationRessourceComponent } from './validation-ressource.component';

describe('ValidationRessourceComponent', () => {
  let component: ValidationRessourceComponent;
  let fixture: ComponentFixture<ValidationRessourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationRessourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
