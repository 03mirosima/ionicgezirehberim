import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city/city.component';


@NgModule({
  declarations: [
    CityComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    CityRoutingModule
  ]
})
export class CityModule { }
