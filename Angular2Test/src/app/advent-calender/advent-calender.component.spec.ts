import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventCalenderComponent } from './advent-calender.component';

describe('AdventCalenderComponent', () => {
  let component: AdventCalenderComponent;
  let fixture: ComponentFixture<AdventCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
