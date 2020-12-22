import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinesQuitumbePageRoutingModule } from './lines-quitumbe-routing.module';

import { LinesQuitumbePage } from './lines-quitumbe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinesQuitumbePageRoutingModule
  ],
  declarations: [LinesQuitumbePage]
})
export class LinesQuitumbePageModule {}
