import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinesRecreoPageRoutingModule } from './lines-recreo-routing.module';

import { LinesRecreoPage } from './lines-recreo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinesRecreoPageRoutingModule
  ],
  declarations: [LinesRecreoPage]
})
export class LinesRecreoPageModule {}
