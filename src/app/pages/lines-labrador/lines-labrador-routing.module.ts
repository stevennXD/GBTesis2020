import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinesLabradorPage } from './lines-labrador.page';

const routes: Routes = [
  {
    path: '',
    component: LinesLabradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinesLabradorPageRoutingModule {}
