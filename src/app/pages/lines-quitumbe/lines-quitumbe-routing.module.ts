import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinesQuitumbePage } from './lines-quitumbe.page';

const routes: Routes = [
  {
    path: '',
    component: LinesQuitumbePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinesQuitumbePageRoutingModule {}
