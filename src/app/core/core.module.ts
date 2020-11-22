import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger/lib/logger.service';
import { LOGGER } from '@core/model';
import { environment } from '@environment';
import { LoggerModule } from 'ngx-logger/lib/logger.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: environment.logLevel,
    }),
  ],
  exports: [BrowserModule],
  providers: [{ provide: LOGGER, useClass: NGXLogger }],
})
export class CoreModule {}
