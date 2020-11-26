import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apod, ApodApiInfo, Health } from '@core/model';
import { formatDateToYYYYMMDD } from '@core/utilities';
import { Observable, of } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';
import { ConfigService } from '@core/services/config';
import { ApodParams } from '@core/model/apod/Apod';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly _apiInfo: ApodApiInfo;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this._apiInfo = configService.value.apod;
  }

  get apiInfo(): ApodApiInfo {
    return this._apiInfo;
  }

  public fetchPicture(date: Date): Observable<Apod> {
    return this.http.get<Apod>(this._apiInfo.api, {
      params: { ...ApodParams.from({ date, apiKey: this._apiInfo.key }) },
    });
  }

  public healthCheck(): Observable<Health> {
    // no health resource but whatever
    return this.fetchPicture(new Date()).pipe(
      mapTo(Health.OK),
      catchError((_) => of(Health.DOWN))
    );
  }
}
