import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apod } from '@core/model';
import { formatDateToYYYYMMDD } from '@core/utilities';
import { Observable } from 'rxjs';
import { ConfigService } from '@core/services/config';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  public fetchPicture(date: Date): Observable<Apod> {
    return this.http.get<Apod>(this.configService.config.apod.api, {
      params: {
        date: formatDateToYYYYMMDD(date),
        api_key: this.configService.config.apod.key,
      },
    });
  }
}
