import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BASEComponent } from './base.component';

describe('BASEComponent', () => {
  let component: BASEComponent;
  let fixture: ComponentFixture<BASEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BASEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BASEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
