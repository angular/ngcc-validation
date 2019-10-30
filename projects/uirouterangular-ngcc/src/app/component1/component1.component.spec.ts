import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1Component } from './component1.component';

describe('Component1Component', () => {
  let component: Component1Component;
  let fixture: ComponentFixture<Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
