import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'maps',
    loadChildren: () => import('./pages/maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'maps/:id',
    loadChildren: () => import('./pages/maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'transfer-stations',
    loadChildren: () => import('./pages/transfer-stations/transfer-stations.module').then( m => m.TransferStationsPageModule)
  },
  {
    path: 'lines-quitumbe',
    loadChildren: () => import('./pages/lines-quitumbe/lines-quitumbe.module').then( m => m.LinesQuitumbePageModule)
  },
  {
    path: 'lines-detail-quitumbe/:id',
    loadChildren: () => import('./pages/lines-detail-quitumbe/lines-detail-quitumbe.module').then( m => m.LinesDetailQuitumbePageModule)
  },
  {
    path: 'lines-recreo',
    loadChildren: () => import('./pages/lines-recreo/lines-recreo.module').then( m => m.LinesRecreoPageModule)
  },
  {
    path: 'lines-detail-recreo/:id',
    loadChildren: () => import('./pages/lines-detail-recreo/lines-detail-recreo.module').then( m => m.LinesDetailRecreoPageModule)
  },
  {
    path: 'lines-magdalena',
    loadChildren: () => import('./pages/lines-magdalena/lines-magdalena.module').then( m => m.LinesMagdalenaPageModule)
  },
  {
    path: 'lines-detail-magdalena/:id',
    loadChildren: () => import('./pages/lines-detail-magdalena/lines-detail-magdalena.module').then( m => m.LinesDetailMagdalenaPageModule)
  },
  {
    path: 'lines-labrador',
    loadChildren: () => import('./pages/lines-labrador/lines-labrador.module').then( m => m.LinesLabradorPageModule)
  },
  {
    path: 'lines-detail-labrador/:id',
    loadChildren: () => import('./pages/lines-detail-labrador/lines-detail-labrador.module').then( m => m.LinesDetailLabradorPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
