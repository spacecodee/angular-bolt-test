import {Component, Renderer2, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {Chart, ChartDataset, ChartOptions, ChartType, registerables} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [
    BaseChartDirective
  ],
  templateUrl: './metrics.component.html',
  styleUrl: './metrics.component.css'
})
export class MetricsComponent implements OnInit, OnDestroy {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: '' // Set dynamically
        }
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        ticks: {
          color: '' // Set dynamically
        }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: '' // Set dynamically
        }
      },
    },
  };
  public lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;

  public lineChartData: ChartDataset[] = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Transactions',
      yAxisID: 'y',
      backgroundColor: '',
      borderColor: 'rgba(75, 192, 192, 1)', // Blue border
      borderWidth: 1
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Orders',
      yAxisID: 'y1',
      backgroundColor: '',
      borderColor: 'rgba(153, 102, 255, 1)', // Purple border
      borderWidth: 1
    }
  ];

  private mutationObserver: MutationObserver | undefined;

  constructor(private readonly renderer: Renderer2) {
    // Register Chart.js components
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.setChartStyles();
    this.observeDarkModeToggle();
  }

  ngOnDestroy() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }

  setChartStyles() {
    const body = this.renderer.selectRootElement('body', true);
    const isDarkMode = body.classList.contains('dark');
    const tickColor = isDarkMode ? '#FFFFFF' : '#000000'; // White for dark mode, black for light mode

    this.lineChartOptions.scales?.['x']?.ticks && (this.lineChartOptions.scales['x'].ticks.color = tickColor);
    this.lineChartOptions.scales?.['y']?.ticks && (this.lineChartOptions.scales['y'].ticks.color = tickColor);
    this.lineChartOptions.scales?.['y1']?.ticks && (this.lineChartOptions.scales['y1'].ticks.color = tickColor);

    this.lineChartData[0].backgroundColor = isDarkMode ? 'rgba(75, 192, 192, 0.2)' : 'rgba(75, 192, 192, 0.5)';
    this.lineChartData[1].backgroundColor = isDarkMode ? 'rgba(153, 102, 255, 0.2)' : 'rgba(153, 102, 255, 0.5)';

    this.chart?.update();
  }

  observeDarkModeToggle() {
    const body = this.renderer.selectRootElement('body', true);
    this.mutationObserver = new MutationObserver(() => {
      this.setChartStyles();
    });
    this.mutationObserver.observe(body, {attributes: true, attributeFilter: ['class']});
  }
}
