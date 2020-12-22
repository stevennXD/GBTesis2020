import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinesDetailRecreoPage } from './lines-detail-recreo.page';

const routes: Routes = [
  {
    path: '',
    component: LinesDetailRecreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinesDetailRecreoPageRoutingModule {}
