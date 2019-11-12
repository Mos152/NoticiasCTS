import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportesPage } from './deportes.page';

describe('DeportesPage', () => {
  let component: DeportesPage;
  let fixture: ComponentFixture<DeportesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeportesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeportesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
