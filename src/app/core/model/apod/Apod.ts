import { HttpParams } from '@angular/common/http';
import { formatDateToYYYYMMDD } from '@core/utilities';

// TODO Object oriented?
export interface Apod {
  title: string;
  date: string;
  explanation: string;
  service_version: string;
  media_type: string;
  hdurl: string;
  url: string;
  copyright?: string;
}

export class ApodParams {
  private constructor(
    public readonly date: string,
    public readonly api_key: string
  ) {
    if (date == null || api_key == null)
      throw new Error(
        'Failed to initialize Apod params. Date and key must not be nullable'
      );
  }

  public static from(
    args: HttpParams | { date: Date; apiKey: string }
  ): ApodParams {
    if (args instanceof HttpParams)
      return new ApodParams(args.get('date'), args.get('api_key'));
    else return new ApodParams(formatDateToYYYYMMDD(args.date), args.apiKey);
  }
}
