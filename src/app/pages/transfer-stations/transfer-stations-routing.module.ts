import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferStationsPage } from './transfer-stations.page';

const routes: Routes = [
  {
    path: '',
    component: TransferStationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferStationsPageRoutingModule {}
