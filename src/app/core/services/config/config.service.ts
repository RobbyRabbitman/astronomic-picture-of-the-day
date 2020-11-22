import { Injectable } from '@angular/core';
import { Config } from '@core/model';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly _config: Config;

  constructor() {
    this._config = environment;
  }

  get config(): Config {
    return this._config;
  }
}
