import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsExtendedComponent } from './skills-extended.component';

describe('SkillsExtendedComponent', () => {
  let component: SkillsExtendedComponent;
  let fixture: ComponentFixture<SkillsExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
