import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioExtendedComponent } from './bio-extended.component';

describe('BioExtendedComponent', () => {
  let component: BioExtendedComponent;
  let fixture: ComponentFixture<BioExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
