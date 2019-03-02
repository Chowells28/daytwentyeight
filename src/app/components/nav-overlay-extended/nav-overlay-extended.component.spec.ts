import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOverlayExtendedComponent } from './nav-overlay-extended.component';

describe('NavOverlayExtendedComponent', () => {
  let component: NavOverlayExtendedComponent;
  let fixture: ComponentFixture<NavOverlayExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavOverlayExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavOverlayExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
