import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LOGGER } from '@core/model';
import { environment } from '@environment';
import { NGXLogger, LoggerModule } from 'ngx-logger';
import { StoreService } from './services/store/store.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: environment.logLevel,
    }),
  ],
  exports: [BrowserModule, BrowserAnimationsModule],
  providers: [{ provide: LOGGER, useClass: NGXLogger }],
})
export class CoreModule {
  constructor(store: StoreService) {
    //store.dispatchHealthCheck().subscribe();
  }
}
