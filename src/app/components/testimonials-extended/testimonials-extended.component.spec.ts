import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsExtendedComponent } from './testimonials-extended.component';

describe('TestimonialsExtendedComponent', () => {
  let component: TestimonialsExtendedComponent;
  let fixture: ComponentFixture<TestimonialsExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialsExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
