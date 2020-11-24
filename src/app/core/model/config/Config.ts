import { NgxLoggerLevel } from 'ngx-logger/lib/types/logger-level.enum';

export interface Config {
  production: boolean;
  apod: ApodApiInfo;
  logLevel: NgxLoggerLevel;
}

export interface ApodApiInfo {
  api: string;
  key: string;
}
