import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinesDetailMagdalenaPage } from './lines-detail-magdalena.page';

const routes: Routes = [
  {
    path: '',
    component: LinesDetailMagdalenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinesDetailMagdalenaPageRoutingModule {}
