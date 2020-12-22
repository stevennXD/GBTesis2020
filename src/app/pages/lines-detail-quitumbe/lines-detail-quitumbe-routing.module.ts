import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinesDetailQuitumbePage } from './lines-detail-quitumbe.page';

const routes: Routes = [
  {
    path: '',
    component: LinesDetailQuitumbePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinesDetailQuitumbePageRoutingModule {}
