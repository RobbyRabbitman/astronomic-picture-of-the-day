import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { declarations, exports } from './components';
import { modules } from './modules';

@NgModule({
  declarations: [...declarations],
  imports: [...modules, FlexLayoutModule],
  exports: [...modules, ...exports, FlexLayoutModule],
})
export class SharedModule {}
