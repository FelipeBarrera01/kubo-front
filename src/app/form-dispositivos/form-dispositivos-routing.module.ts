import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormDispositivosPage } from './form-dispositivos.page';

const routes: Routes = [
  {
    path: '',
    component: FormDispositivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormDispositivosPageRoutingModule {}
