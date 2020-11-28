import {
  Component,
  Inject,
  OnInit,
  Optional,
  ViewEncapsulation,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormControl, Validators } from '@angular/forms';
import { MatDateFormats, MAT_DATE_FORMATS } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apod, LOGGER, Logger } from '@core/model';
import { StoreService } from '@core/services';
import { formatDateToYYYYMMDD } from '@core/utilities';
import { APOD_DATE_QUERY_PARAM } from '@features/apod/routes/routes';
import { ErrorService } from '@shared/components';
import { BehaviorSubject, EMPTY, from, Observable, of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  mapTo,
  pluck,
  share,
  switchMap,
  switchMapTo,
  tap,
} from 'rxjs/operators';

const FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: MAT_DATE_FORMATS, useValue: FORMATS }], // doesnt work :(
})
export class ApodComponent implements OnInit {
  private _apod$: BehaviorSubject<Apod>;
  private _forward$: BehaviorSubject<Date>;
  private _backward$: BehaviorSubject<Date>;
  private _small$: Observable<boolean>;
  private _dateControl: FormControl;
  private _loading$: BehaviorSubject<boolean>;
  public readonly readonlyTextInput: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public store: StoreService,
    private errorService: ErrorService,
    private layout: BreakpointObserver,
    @Inject(LOGGER) @Optional() private logger: Logger
  ) {}

  public get apod$(): Observable<Apod> {
    return this._apod$.asObservable();
  }

  public get dateControl(): FormControl {
    return this._dateControl;
  }

  public get small$(): Observable<boolean> {
    return this._small$;
  }

  public get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  public get backward$(): Observable<Date> {
    return this._backward$.asObservable().pipe(filter((x) => x != null));
  }

  public get forward$(): Observable<Date> {
    return this._forward$.asObservable().pipe(filter((x) => x != null));
  }

  public ngOnInit(): void {
    this._apod$ = new BehaviorSubject<Apod>(null);
    this._forward$ = new BehaviorSubject<Date>(null);
    this._backward$ = new BehaviorSubject<Date>(null);
    this._loading$ = new BehaviorSubject<boolean>(false);

    this._small$ = this.layout
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .pipe(map((state) => state.matches));
    this._dateControl = new FormControl(null, [Validators.required]);
    this._dateControl.valueChanges
      .pipe(
        filter((_) => this._dateControl.valid),
        map((input) => new Date(input)),
        tap((date) =>
          this.logger?.trace(
            `Date formcontrol value: ${formatDateToYYYYMMDD(date)}`
          )
        )
      )
      .subscribe({ next: (date) => this.next(date) });

    this.route.queryParams
      .pipe(
        tap((_) => this._apod$.next(null)),
        tap((_) => this._loading$.next(true)),
        pluck(APOD_DATE_QUERY_PARAM),
        tap((param) =>
          this.logger?.trace(`${APOD_DATE_QUERY_PARAM} route param: ${param}`)
        ),
        map((param) => new Date(param)),
        switchMap((date) => {
          if (isNaN(date.getTime())) {
            return from(this.next(new Date())).pipe(switchMapTo(EMPTY));
          } else return of(date);
        }),
        tap((date) => this._dateControl.setValue(date, { emitEvent: false })),
        tap((date) => {
          this._forward$.next(
            new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
          );
          this._backward$.next(
            new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1)
          );
        }),
        switchMap((date) =>
          this.store.dispatchApod(date).pipe(
            tap((_) => this._loading$.next(false)),
            catchError((error) => {
              this._loading$.next(false);
              return this.errorService
                .showErrorInDialog(error)
                .pipe(mapTo(null));
            })
          )
        )
      )
      .subscribe({ next: (apod) => this._apod$.next(apod) });
  }

  public async next(value: Date): Promise<boolean> {
    return this.router.navigate([], {
      queryParams: {
        [APOD_DATE_QUERY_PARAM]: formatDateToYYYYMMDD(value),
      },
    });
  }
}
