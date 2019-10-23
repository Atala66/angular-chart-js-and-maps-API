import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

export interface BarChartConfig {
  currentMonth: string;
  barChartLabels: Label[];
  barChartType: ChartType;
  barChartData: ChartDataSets[]; // @todo-- pasar esto a un @input data

}

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.less']
})
export class BarChartComponent implements OnInit {
@Input() config: BarChartConfig;
  constructor() { }

  public barChartOptions: ChartOptions = {
       responsive: true,
       scales: { xAxes: [{}], yAxes: [{}] },
       plugins: {
         datalabels : {
           anchor : 'end',
           align: 'end',
         }
       }
    };

    // todo esta seran @Inputs
//  public barChartLabels: Label[] = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
 // public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  // public barChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Musculación' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Cardio' }
  // ];




  ngOnInit() {}

}
