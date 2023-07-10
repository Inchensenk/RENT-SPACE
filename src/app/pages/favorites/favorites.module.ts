import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesPageComponent } from './favorites.component';

@NgModule({
  declarations: [FavoritesPageComponent],
  imports: [CommonModule, FavoritesRoutingModule],
  exports: [FavoritesPageComponent],
})
export class FavoritesModule {}
