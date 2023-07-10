import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main.component';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, MainRoutingModule],
  exports: [MainPageComponent],
})
export class MainModule {}
