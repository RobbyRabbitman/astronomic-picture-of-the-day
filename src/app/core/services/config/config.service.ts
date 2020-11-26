import { Injectable } from '@angular/core';
import { Config } from '@core/model';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly _value: Config;

  constructor() {
    this._value = environment;
  }

  get value(): Config {
    return this._value;
  }
}
