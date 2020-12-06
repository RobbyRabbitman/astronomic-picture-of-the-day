import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { LOGGER, Logger, ApodResponse, ApodParams } from '@core/model';
import { ConfigService, LocalStorageService } from '@core/services';
import { Observable, of } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CacheInterceptor implements HttpInterceptor {
  constructor(
    private localStorage: LocalStorageService,
    private config: ConfigService,
    @Inject(LOGGER) @Optional() private logger: Logger
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url === this.config.value.apod.api) {
      try {
        const params = ApodParams.from(req.params);
        const cachedApod = this.localStorage.read<ApodResponse>(params.date);
        if (cachedApod)
          return of(
            new HttpResponse<ApodResponse>({
              ...req,
              body: cachedApod,
              status: 200,
            })
          );
        else
          return next.handle(req).pipe(
            filter((res) => res.type === HttpEventType.Response),
            tap((res: HttpResponse<ApodResponse>) =>
              this.localStorage.write(params.date, res.body)
            )
          );
      } catch (error) {
        this.logger?.trace(
          'Could not read apod params while intercepting apod request/response!',
          req
        );
      }
    }
    return next.handle(req);
  }
}
