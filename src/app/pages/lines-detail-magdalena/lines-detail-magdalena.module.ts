import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinesDetailMagdalenaPageRoutingModule } from './lines-detail-magdalena-routing.module';

import { LinesDetailMagdalenaPage } from './lines-detail-magdalena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinesDetailMagdalenaPageRoutingModule
  ],
  declarations: [LinesDetailMagdalenaPage]
})
export class LinesDetailMagdalenaPageModule {}
