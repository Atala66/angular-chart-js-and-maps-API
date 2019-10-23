import { Component, OnInit } from '@angular/core';
import { BarChartConfig } from 'src/app/chart-components/bar-chart/bar-chart.component';

@Component({
  selector: 'app-fitness-progress',
  templateUrl: './fitness-progress.component.html',
  styleUrls: ['./fitness-progress.component.less']
})
export class FitnessProgressComponent implements OnInit {
  public barChartConfig: BarChartConfig;

  constructor() { }

  ngOnInit() {
 this.barChartConfig = this.configBarChart();
 console.log(this.barChartConfig);

  }


  public configBarChart(): BarChartConfig {
    return  {
      currentMonth: 'SEPTIEMBRE',
      barChartLabels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      barChartType: 'bar',
      barChartData: [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Musculación' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Cardio' }
      ]
    };
  }

}
