import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessProgressComponent } from './fitness-progress.component';

describe('FitnessProgressComponent', () => {
  let component: FitnessProgressComponent;
  let fixture: ComponentFixture<FitnessProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
