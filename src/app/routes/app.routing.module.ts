import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APOD_FEATURE } from './routes';

const routes: Routes = [
  {
    path: APOD_FEATURE,
    loadChildren: () =>
      import('@features/apod/apod.module').then((module) => module.ApodModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: APOD_FEATURE,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
