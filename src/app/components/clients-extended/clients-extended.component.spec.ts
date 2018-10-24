import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsExtendedComponent } from './clients-extended.component';

describe('ClientsExtendedComponent', () => {
  let component: ClientsExtendedComponent;
  let fixture: ComponentFixture<ClientsExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
