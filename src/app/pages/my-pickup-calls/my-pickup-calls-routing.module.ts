import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPickupCallsPage } from './my-pickup-calls.page';

const routes: Routes = [
  {
    path: '',
    component: MyPickupCallsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPickupCallsPageRoutingModule {}
