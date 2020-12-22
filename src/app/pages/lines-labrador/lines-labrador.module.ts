import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinesLabradorPageRoutingModule } from './lines-labrador-routing.module';

import { LinesLabradorPage } from './lines-labrador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinesLabradorPageRoutingModule
  ],
  declarations: [LinesLabradorPage]
})
export class LinesLabradorPageModule {}
