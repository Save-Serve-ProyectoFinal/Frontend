import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'suscripciones',
    loadChildren: () => import('./pages/suscripciones/suscripciones.module').then( m => m.SuscripcionesPageModule)
  },
  {
    path: 'nuestros-donantes',
    loadChildren: () => import('./pages/nuestros-donantes/nuestros-donantes.module').then( m => m.NuestrosDonantesPageModule)
  },
  {
    path: 'nuestros-beneficiarios',
    loadChildren: () => import('./pages/nuestros-beneficiarios/nuestros-beneficiarios.module').then( m => m.NuestrosBeneficiariosPageModule)
  },
  {
    path: 'articulos',
    loadChildren: () => import('./pages/articulos/articulos.module').then( m => m.ArticulosPageModule)
  },
  {
    path: 'detalle-articulo/:idArticulo',
    loadChildren: () => import('./pages/detalle-articulo/detalle-articulo.module').then( m => m.DetalleArticuloPageModule)
  },
  {
  path: 'registro-donante',
    loadChildren: () =>
      import('./components/registro-donante/registro-donante.module')
        .then(m => m.RegistroDonanteModule)
  },
  {
    path: 'pasarela-pago',
    loadChildren: () => import('./pages/pasarela-pago/pasarela-pago.module').then( m => m.PasarelaPagoPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
