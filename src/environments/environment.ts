// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Config } from '@core/model';
import { NgxLoggerLevel } from 'ngx-logger';

export const environment: Config = {
  production: false,
  apod: {
    api: 'https://api.nasa.gov/planetary/apod',
    key: 'DEMO_KEY',
  },
  logLevel: NgxLoggerLevel.TRACE,
  github: {
    uri: 'https://github.com/RobbyRabbitman/astronomic-picture-of-the-day',
    title: 'Repository of this App',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
