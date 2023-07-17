import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main.component';
import { HeaderModule } from 'src/app/components/header';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, MainRoutingModule, HeaderModule],
  exports: [MainPageComponent],
})
export class MainModule {}
