import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBikePage } from './view-bike.page';

describe('ViewBikePage', () => {
  let component: ViewBikePage;
  let fixture: ComponentFixture<ViewBikePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBikePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
