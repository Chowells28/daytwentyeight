import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsExtendedSpiritComponent } from './testimonials-extended-spirit.component';

describe('TestimonialsExtendedSpiritComponent', () => {
  let component: TestimonialsExtendedSpiritComponent;
  let fixture: ComponentFixture<TestimonialsExtendedSpiritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialsExtendedSpiritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsExtendedSpiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
