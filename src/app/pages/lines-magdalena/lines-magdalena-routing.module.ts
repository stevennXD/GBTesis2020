import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinesMagdalenaPage } from './lines-magdalena.page';

const routes: Routes = [
  {
    path: '',
    component: LinesMagdalenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinesMagdalenaPageRoutingModule {}
