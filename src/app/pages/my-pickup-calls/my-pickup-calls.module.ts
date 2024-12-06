import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPickupCallsPageRoutingModule } from './my-pickup-calls-routing.module';

import { MyPickupCallsPage } from './my-pickup-calls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPickupCallsPageRoutingModule
  ],
  declarations: [MyPickupCallsPage]
})
export class MyPickupCallsPageModule {}
