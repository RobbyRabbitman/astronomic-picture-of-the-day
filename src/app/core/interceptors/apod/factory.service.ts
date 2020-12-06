import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { LOGGER, Logger } from '@core/model';
import { Apod } from '@core/model';
import { ConfigService } from '@core/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApodFactoryInterceptor implements HttpInterceptor {
  constructor(
    private config: ConfigService,
    @Inject(LOGGER) @Optional() private logger: Logger
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((res) => {
        if (
          res.type === HttpEventType.Response &&
          req.url === this.config.value.apod.api
        ) {
          const apod: Apod = new Apod(res.body);
          const deserialized = res.clone({ ...res, body: apod });
          this.logger?.trace(
            'Apod Factory Interceptor ->',
            'response:',
            res,
            'deserialized:',
            deserialized
          );
          return deserialized;
        } else return res;
      })
    );
  }
}
