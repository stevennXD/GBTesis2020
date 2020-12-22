import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferStationsPageRoutingModule } from './transfer-stations-routing.module';

import { TransferStationsPage } from './transfer-stations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferStationsPageRoutingModule
  ],
  declarations: [TransferStationsPage]
})
export class TransferStationsPageModule {}
