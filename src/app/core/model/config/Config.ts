import { NgxLoggerLevel } from 'ngx-logger/lib/types/logger-level.enum';

export interface Config {
  production: boolean;
  apod: {
    api: string;
    key: string;
  };
  logLevel: NgxLoggerLevel;
}
