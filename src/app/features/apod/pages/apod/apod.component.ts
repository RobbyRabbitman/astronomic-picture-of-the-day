import { Component, Inject, OnDestroy, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LOGGER, Logger } from '@core/model';
import { StoreService } from '@core/services/store/store.service';
import { formatDateToYYYYMMDD } from '@core/utilities';
import { APOD_DATE_QUERY_PARAM } from '@features/apod/routes/routes';
import { ErrorService } from '@shared/components';
import { EMPTY, from, of, Subscription } from 'rxjs';
import { map, pluck, switchMap, switchMapTo, tap } from 'rxjs/operators';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss'],
})
export class ApodComponent implements OnInit, OnDestroy {
  private params$: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public store: StoreService,
    private errorService: ErrorService,
    @Inject(LOGGER) @Optional() private logger: Logger
  ) {}

  ngOnInit(): void {
    this.params$ = this.route.queryParams
      .pipe(
        pluck(APOD_DATE_QUERY_PARAM),
        tap((param) =>
          this.logger?.trace(`${APOD_DATE_QUERY_PARAM} param: ${param}`)
        ),
        map((param) => new Date(param)),
        switchMap((date) => {
          if (isNaN(date.getTime())) {
            return from(
              this.router.navigate([], {
                queryParams: {
                  [APOD_DATE_QUERY_PARAM]: formatDateToYYYYMMDD(new Date()),
                },
              })
            ).pipe(switchMapTo(EMPTY));
          } else return of(date);
        }),
        switchMap((date) => this.store.dispatchApod(date))
      )
      .subscribe({
        error: (error) => this.errorService.showErrorInDialog(error),
      });
  }

  ngOnDestroy(): void {
    this.params$.unsubscribe();
  }
}
