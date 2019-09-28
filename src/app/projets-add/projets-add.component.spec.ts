import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsAddComponent } from './projets-add.component';

describe('ProjetsAddComponent', () => {
  let component: ProjetsAddComponent;
  let fixture: ComponentFixture<ProjetsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
