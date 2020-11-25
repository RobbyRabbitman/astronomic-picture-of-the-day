import { Inject, Injectable, Optional } from '@angular/core';
import { Apod, Health, Logger, LOGGER } from '@core/model';
import { formatDateToYYYYMMDD } from '@core/utilities';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DataService } from '../data';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _healthStatus$: BehaviorSubject<Health>;
  private _pictures$: BehaviorSubject<Map<string, Apod>>;
  private _appName: string;

  constructor(
    private data: DataService,
    @Inject(LOGGER) @Optional() private logger: Logger
  ) {
    this.init();
    this.log();
  }

  public get appName(): string {
    return this._appName;
  }

  public get healthStatus$(): Observable<Health> {
    return this._healthStatus$.asObservable();
  }

  public getPicture(date: Date = new Date()): Observable<Apod> {
    return this._pictures$
      .asObservable()
      .pipe(map((pictures) => pictures.get(formatDateToYYYYMMDD(date))));
  }

  public dispatchHealthCheck(): Observable<Health> {
    return this.data
      .healthCheck()
      .pipe(tap((value) => this._healthStatus$.next(value)));
  }

  public dispatchApod(date: Date): Observable<Apod> {
    return this.data
      .fetchPicture(date)
      .pipe(tap((value) => this._setApod(date, value)));
  }

  private _setApod(date: Date, apod: Apod): void {
    this._pictures$.next(
      this._pictures$.value.set(formatDateToYYYYMMDD(date), apod)
    );
  }

  private log(): void {
    merge(
      this._pictures$.asObservable(),
      this.healthStatus$.pipe(
        map((status) => `${this.data.apiInfo.api} status: ${status}`)
      )
    ).subscribe({
      next: (x) => this.logger?.trace(x),
    });
  }

  private init(): void {
    this._appName = 'Astronomic Picture Of The Day';
    this._pictures$ = new BehaviorSubject<Map<string, Apod>>(
      new Map<string, Apod>()
    );
    this._healthStatus$ = new BehaviorSubject<Health>(Health.UNKNOWN);
  }
}
