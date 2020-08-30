import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormDispositivosPageRoutingModule } from './form-dispositivos-routing.module';

import { FormDispositivosPage } from './form-dispositivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormDispositivosPageRoutingModule
  ],
  declarations: [FormDispositivosPage]
})
export class FormDispositivosPageModule {}
