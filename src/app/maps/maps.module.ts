import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MapsComponent } from './maps.component';
import { AgmCoreModule } from '@agm/core';


const routes: Routes = [
  {path: '', component: MapsComponent }
  ];

@NgModule({
  declarations: [
    MapsComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDZSd0DsC10wIH5Yiyze8AnqynNyI8Xolo'
      }),
    RouterModule.forChild(routes)
  ],
  exports : [
    MapsComponent
 ]
})
export class MapsModule { }
