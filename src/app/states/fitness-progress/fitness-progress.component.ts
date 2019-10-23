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
      currentMonth: 'SEPTIEMBRE'
    };
  }

}
