import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { PickupCallCardPage } from 'src/app/components/pickup-call-card/pickup-call-card.page';
import { PickupCallCardPageModule } from 'src/app/components/pickup-call-card/pickup-call-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PickupCallCardPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
