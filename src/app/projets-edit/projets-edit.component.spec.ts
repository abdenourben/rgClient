import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsEditComponent } from './projets-edit.component';

describe('ProjetsEditComponent', () => {
  let component: ProjetsEditComponent;
  let fixture: ComponentFixture<ProjetsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
