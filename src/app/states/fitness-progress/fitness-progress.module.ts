import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FitnessProgressComponent } from './fitness-progress.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarChartComponent } from 'src/app/chart-components/bar-chart/bar-chart.component';
import { FormComponent } from 'src/app/components/form/form.component';


const routes: Routes = [
  {path: '', component: FitnessProgressComponent }
  ];

@NgModule({
  declarations: [
    BarChartComponent,
    FormComponent,
    FitnessProgressComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports : [
    FitnessProgressComponent
 ]
})
export class FitnessProgressModule { }
