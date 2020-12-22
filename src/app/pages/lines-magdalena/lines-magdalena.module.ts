import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinesMagdalenaPageRoutingModule } from './lines-magdalena-routing.module';

import { LinesMagdalenaPage } from './lines-magdalena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinesMagdalenaPageRoutingModule
  ],
  declarations: [LinesMagdalenaPage]
})
export class LinesMagdalenaPageModule {}
