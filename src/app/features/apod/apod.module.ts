import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { pages } from './pages';
import { ApodRoutingModule } from './routes';

@NgModule({
  declarations: [...pages],
  imports: [SharedModule, ApodRoutingModule],
})
export class ApodModule {}
