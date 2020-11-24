import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApodComponent } from '../pages';
import { APOD_PAGE } from './routes';

const routes: Routes = [
  {
    path: APOD_PAGE,
    component: ApodComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApodRoutingModule {}
