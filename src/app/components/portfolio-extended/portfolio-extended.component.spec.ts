import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioExtendedComponent } from './portfolio-extended.component';

describe('PortfolioExtendedComponent', () => {
  let component: PortfolioExtendedComponent;
  let fixture: ComponentFixture<PortfolioExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
