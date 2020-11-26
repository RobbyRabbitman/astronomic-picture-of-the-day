import { Inject, Injectable, Optional } from '@angular/core';
import { LOGGER, Logger } from '@core/model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(@Inject(LOGGER) @Optional() private logger: Logger) {}

  read<T>(key: string): T {
    const object: T = JSON.parse(localStorage.getItem(key));
    this.logger?.trace(`Read Localstorage[${key}]`, object);
    return object;
  }

  write<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
    this.logger?.trace(`Write Localstorage[${key}]`, value);
  }
}
