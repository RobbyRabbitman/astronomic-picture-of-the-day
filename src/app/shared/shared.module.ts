import { NgModule } from '@angular/core';
import { declarations, exports } from './components';
import { modules } from './modules';

@NgModule({
  declarations: [...declarations],
  imports: [...modules],
  exports: [...modules, ...exports],
})
export class SharedModule {}
