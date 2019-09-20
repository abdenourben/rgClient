import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgAliemntaireAddComponent } from './rg-aliemntaire-add.component';

describe('RgAliemntaireAddComponent', () => {
  let component: RgAliemntaireAddComponent;
  let fixture: ComponentFixture<RgAliemntaireAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgAliemntaireAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgAliemntaireAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
