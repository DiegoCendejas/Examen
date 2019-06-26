import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RESTComponent } from './rest.component';

describe('RESTComponent', () => {
  let component: RESTComponent;
  let fixture: ComponentFixture<RESTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RESTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RESTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
