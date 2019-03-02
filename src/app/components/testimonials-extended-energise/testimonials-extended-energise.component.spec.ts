import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsExtendedEnergiseComponent } from './testimonials-extended-energise.component';

describe('TestimonialsExtendedEnergiseComponent', () => {
  let component: TestimonialsExtendedEnergiseComponent;
  let fixture: ComponentFixture<TestimonialsExtendedEnergiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialsExtendedEnergiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsExtendedEnergiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
