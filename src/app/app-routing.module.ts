import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: '../app/states/fitness-progress/fitness-progress.module#FitnessProgressModule', pathMatch: 'full'},
  { path: 'fitness-progress', loadChildren: '../app/states/fitness-progress/fitness-progress.module#FitnessProgressModule'},
  { path: 'google-maps', loadChildren: './maps/maps.module#MapsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
