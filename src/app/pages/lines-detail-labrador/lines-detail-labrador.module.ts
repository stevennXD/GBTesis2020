import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinesDetailLabradorPageRoutingModule } from './lines-detail-labrador-routing.module';

import { LinesDetailLabradorPage } from './lines-detail-labrador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinesDetailLabradorPageRoutingModule
  ],
  declarations: [LinesDetailLabradorPage]
})
export class LinesDetailLabradorPageModule {}
