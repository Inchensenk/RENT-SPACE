import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main').then(({ MainModule }) => MainModule),
  },
  {
    path: 'faivorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then(({ FavoritesModule }) => FavoritesModule),
  },
  {
    path: 'authorization',
    loadChildren: () => import('./pages/authorization/authorization.module').then(({ AuthorizationModule }) => AuthorizationModule),
  },
  {
    path: 'advertisement',
    loadChildren: () => import('./pages/advertisement/advertisement.module').then(({ AdvertisementModule }) => AdvertisementModule),
  },
  {
    path: 'additional',
    loadChildren: () => import('./pages/additional/additional.module').then(({ AdditionalModule }) => AdditionalModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
