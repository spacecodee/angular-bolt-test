import { Component } from '@angular/core';
import {MetricsComponent} from '../../components/metrics/metrics.component';
import {DailyIncomeComponent} from '../../components/daily-income/daily-income.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MetricsComponent,
    DailyIncomeComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
