import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {Chart, ChartDataset, ChartOptions, ChartType, registerables} from 'chart.js';

@Component({
  selector: 'app-daily-income',
  standalone: true,
  imports: [
    BaseChartDirective
  ],
  templateUrl: './daily-income.component.html',
  styleUrl: './daily-income.component.css'
})
export class DailyIncomeComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public dailyIncomeChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        ticks: {
          stepSize: 50, // Set the step size
          color: '' // Set dynamically
        }
      }
    },
  };
  public dailyIncomeChartLabels: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public dailyIncomeChartType: ChartType = 'line';
  public dailyIncomeChartLegend = true;

  public dailyIncomeChartData: ChartDataset[] = [
    {
      data: [100, 200, 150, 300, 250, 400, 350],
      label: 'Daily Income',
      backgroundColor: '',
      borderColor: 'rgba(75, 192, 192, 1)', // Blue border
      borderWidth: 1
    }
  ];

  constructor() {
    // Register Chart.js components
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.setChartStyles();
  }

  setChartStyles() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark');
    const tickColor = isDarkMode ? '#FFFFFF' : '#000000'; // White for dark mode, black for light mode

    this.dailyIncomeChartOptions.scales?.['y']?.ticks && (this.dailyIncomeChartOptions.scales['y'].ticks.color = tickColor);

    this.dailyIncomeChartData[0].backgroundColor = isDarkMode ? 'rgba(75, 192, 192, 0.2)' : 'rgba(75, 192, 192, 0.5)';

    this.chart?.update();
  }
}
