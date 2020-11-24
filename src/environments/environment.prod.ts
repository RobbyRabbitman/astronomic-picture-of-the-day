import { Config } from '@core/model';
import { NgxLoggerLevel } from 'ngx-logger';

export const environment: Config = {
  production: true,
  apod: {
    api: 'https://api.nasa.gov/planetary/apod',
    key: 'DEMO_KEY',
  },
  logLevel: NgxLoggerLevel.INFO,
};
