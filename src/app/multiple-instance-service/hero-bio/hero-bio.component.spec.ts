/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroBioComponent } from './hero-bio.component';

describe('HeroBioComponent', () => {
  let component: HeroBioComponent;
  let fixture: ComponentFixture<HeroBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
