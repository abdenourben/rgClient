import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsDetailComponent } from './projets-detail.component';

describe('ProjetsDetailComponent', () => {
  let component: ProjetsDetailComponent;
  let fixture: ComponentFixture<ProjetsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
