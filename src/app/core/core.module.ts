import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOGGER } from '@core/model';
import { environment } from '@environment';
import { NGXLogger, LoggerModule } from 'ngx-logger';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApodService } from './interceptors';
import { GITHUB_URI, GITHUB_URI_TITLE } from '@shared/components';
import { MatIconRegistry } from '@angular/material/icon';

const CUSTOM_ICONS = new Map<string, string>([
  ['github', 'assets/icons/github.svg'],
]);

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
  providers: [
    { provide: LOGGER, useClass: NGXLogger },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: ApodService,
    },
    {
      provide: GITHUB_URI,
      useValue: environment.github.uri,
    },
    {
      provide: GITHUB_URI_TITLE,
      useValue: environment.github.title,
    },
  ],
})
export class CoreModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    for (const entry of CUSTOM_ICONS.entries()) {
      matIconRegistry.addSvgIcon(
        entry[0],
        domSanitizer.bypassSecurityTrustResourceUrl(entry[1])
      );
    }
  }
}
