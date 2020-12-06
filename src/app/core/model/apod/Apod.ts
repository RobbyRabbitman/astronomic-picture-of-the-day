import { HttpParams } from '@angular/common/http';
import { formatDateToYYYYMMDD } from '@core/utilities';

export interface ApodResponse {
  title: string;
  date: string;
  explanation: string;
  service_version: string;
  media_type: string;
  url: string;
  hdurl?: string;
  copyright?: string;
}

// formatdate add to class?
export class Apod implements ApodResponse {
  title: string;
  date: string;
  explanation: string;
  service_version: string;
  media_type: string;
  url: string;
  hdurl?: string;
  copyright?: string;
  imageTitle: string;
  youtubeVideoId: string;
  constructor(res: ApodResponse) {
    Object.assign(this, res);
    this.imageTitle = this._buildImageTitle();
    this.youtubeVideoId = this._parseYoutubeVideoId();
  }
  private _buildImageTitle(): string {
    if (this.title && this.copyright)
      return `${this.title}, copyright by ${this.copyright}`;
    else if (this.title) return this.title;
    else if (this.copyright) return this.copyright;
    else return `Astronomic Picture of ${this.date}`;
  }

  //  https://www.youtube.com/embed/ictZttw3c98?rel=0
  private _parseYoutubeVideoId(): string {
    return this.media_type === 'video'
      ? this.url.split('embed/')[1].split('?')[0]
      : null;
  }
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
