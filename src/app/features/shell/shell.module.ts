import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import {
  AboutComponent,
  DialogComponent,
  ShellComponent,
} from '@features/shell/components';

@NgModule({
  declarations: [ShellComponent, AboutComponent, DialogComponent],
  imports: [SharedModule],
  exports: [ShellComponent],
})
export class ShellModule {}
