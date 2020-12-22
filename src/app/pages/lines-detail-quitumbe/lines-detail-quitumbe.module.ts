import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinesDetailQuitumbePageRoutingModule } from './lines-detail-quitumbe-routing.module';

import { LinesDetailQuitumbePage } from './lines-detail-quitumbe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinesDetailQuitumbePageRoutingModule
  ],
  declarations: [LinesDetailQuitumbePage]
})
export class LinesDetailQuitumbePageModule {}
