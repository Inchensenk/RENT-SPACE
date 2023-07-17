import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationPageComponent } from './authorization.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AuthorizationPageComponent],
  imports: [CommonModule, AuthorizationRoutingModule, MatProgressSpinnerModule],
  exports: [AuthorizationPageComponent],
})
export class AuthorizationModule {}
