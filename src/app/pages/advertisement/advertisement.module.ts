import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementRoutingModule } from './advertisement-routing.module';
import { AdvertisementPageComponent } from './advertisement.component';

@NgModule({
  declarations: [AdvertisementPageComponent],
  imports: [CommonModule, AdvertisementRoutingModule],
  exports: [AdvertisementPageComponent],
})
export class AdvertisementModule {}
