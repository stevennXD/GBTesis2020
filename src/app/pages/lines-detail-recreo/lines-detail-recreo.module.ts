import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinesDetailRecreoPageRoutingModule } from './lines-detail-recreo-routing.module';

import { LinesDetailRecreoPage } from './lines-detail-recreo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinesDetailRecreoPageRoutingModule
  ],
  declarations: [LinesDetailRecreoPage]
})
export class LinesDetailRecreoPageModule {}
