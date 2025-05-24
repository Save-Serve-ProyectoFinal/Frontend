import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZonaArticulosPageRoutingModule } from './zona-articulos-routing.module';

import { ZonaArticulosPage } from './zona-articulos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZonaArticulosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ZonaArticulosPage]
})
export class ZonaArticulosPageModule {}
