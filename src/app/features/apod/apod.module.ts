import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { components } from './components';
import { pages } from './pages';
import { ApodRoutingModule } from './routes';

@NgModule({
  declarations: [...pages, ...components],
  imports: [SharedModule, ApodRoutingModule],
})
export class ApodModule {}
