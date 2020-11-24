import { NgModule } from '@angular/core';
import { modules } from './modules';

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule {}
