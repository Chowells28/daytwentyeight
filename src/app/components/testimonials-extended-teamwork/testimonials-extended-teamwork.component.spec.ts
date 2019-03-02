import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsExtendedTeamworkComponent } from './testimonials-extended-teamwork.component';

describe('TestimonialsExtendedTeamworkComponent', () => {
  let component: TestimonialsExtendedTeamworkComponent;
  let fixture: ComponentFixture<TestimonialsExtendedTeamworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialsExtendedTeamworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsExtendedTeamworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
