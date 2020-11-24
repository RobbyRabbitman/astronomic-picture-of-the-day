import { Inject, Injectable, Optional } from '@angular/core';
import { Health, Logger, LOGGER } from '@core/model';
import { BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../data';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _healthStatus$: BehaviorSubject<Health>;

  constructor(
    private data: DataService,
    @Inject(LOGGER) @Optional() private logger: Logger
  ) {
    this.init();
    this.log();
  }

  public get healthStatus$() {
    return this._healthStatus$.asObservable();
  }

  public dispatchHealthCheck(): void {
    this.data
      .healthCheck()
      .subscribe({ next: (value) => this._healthStatus$.next(value) });
  }

  private log(): void {
    merge(
      this.healthStatus$.pipe(
        map((status) => `${this.data.apiInfo.api} status: ${status}`)
      )
    ).subscribe({
      next: (x) => this.logger?.trace(x),
    });
  }

  private init(): void {
    this._healthStatus$ = new BehaviorSubject<Health>(Health.UNKNOWN);
  }
}
