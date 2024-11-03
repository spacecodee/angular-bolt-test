import { Component } from '@angular/core';
import {MetricsComponent} from '../../components/metrics/metrics.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MetricsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
