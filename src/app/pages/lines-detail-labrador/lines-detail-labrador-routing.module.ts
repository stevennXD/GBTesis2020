import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinesDetailLabradorPage } from './lines-detail-labrador.page';

const routes: Routes = [
  {
    path: '',
    component: LinesDetailLabradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinesDetailLabradorPageRoutingModule {}
