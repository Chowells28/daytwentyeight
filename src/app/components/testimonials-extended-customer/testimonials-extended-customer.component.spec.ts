import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsExtendedCustomerComponent } from './testimonials-extended-customer.component';

describe('TestimonialsExtendedCustomerComponent', () => {
  let component: TestimonialsExtendedCustomerComponent;
  let fixture: ComponentFixture<TestimonialsExtendedCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialsExtendedCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsExtendedCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
