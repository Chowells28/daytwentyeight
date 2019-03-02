import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsValueComponent } from './testimonials-value.component';

describe('TestimonialsValueComponent', () => {
  let component: TestimonialsValueComponent;
  let fixture: ComponentFixture<TestimonialsValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialsValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
