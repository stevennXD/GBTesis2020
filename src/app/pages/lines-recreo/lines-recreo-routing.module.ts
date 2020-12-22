import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinesRecreoPage } from './lines-recreo.page';

const routes: Routes = [
  {
    path: '',
    component: LinesRecreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinesRecreoPageRoutingModule {}
