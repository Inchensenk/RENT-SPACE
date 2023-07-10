import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalPageComponent } from './additional.component';

const routes: Routes = [
  {
    path: '',
    component: AdditionalPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdditionalRoutingModule {}
