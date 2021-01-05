import { NgModule } from '@angular/core';
import {
  declarations as componentsDeclarations,
  exports as componentsExports,
} from './components';
import {
  declarations as directivesDeclarations,
  exports as directivesExports,
} from './directives';
import { modules } from './modules';

@NgModule({
  declarations: [...componentsDeclarations, ...directivesDeclarations],
  imports: [...modules],
  exports: [...modules, ...componentsExports, ...directivesExports],
})
export class SharedModule {}
