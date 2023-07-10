import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionalRoutingModule } from './additional-routing.module';
import { AdditionalPageComponent } from './additional.component';

@NgModule({
  declarations: [AdditionalPageComponent],
  imports: [CommonModule, AdditionalRoutingModule],
  exports: [AdditionalPageComponent],
})
export class AdditionalModule {}
