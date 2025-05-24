import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonaArticulosPage } from './zona-articulos.page';

const routes: Routes = [
  {
    path: '',
    component: ZonaArticulosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZonaArticulosPageRoutingModule {}
