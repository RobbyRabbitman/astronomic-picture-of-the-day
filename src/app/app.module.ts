import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { ShellModule } from '@features/shell/shell.module';
import { AppRoutingModule } from '@routes';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, ShellModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
