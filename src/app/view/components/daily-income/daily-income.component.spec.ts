import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyIncomeComponent } from './daily-income.component';

describe('DailyIncomeComponent', () => {
  let component: DailyIncomeComponent;
  let fixture: ComponentFixture<DailyIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyIncomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
