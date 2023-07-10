import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationPageComponent } from './authorization.component';

@NgModule({
  declarations: [AuthorizationPageComponent],
  imports: [CommonModule, AuthorizationRoutingModule],
  exports: [AuthorizationPageComponent],
})
export class AuthorizationModule {}
