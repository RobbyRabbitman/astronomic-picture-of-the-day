import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { Apod } from '@core/model';

@Component({
  selector: 'app-apod-card',
  templateUrl: './apod-card.component.html',
  styleUrls: ['./apod-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ApodCardComponent {
  @Input()
  public apod: Apod;

  public _buildImageTitle(apod: Apod): string {
    if (apod.title && apod.copyright)
      return `${apod.title}, copyright by ${apod.copyright}`;
    else if (apod.title) return apod.title;
    else if (apod.copyright) return apod.copyright;
    else return `Astronomic Picture of ${apod.date}`;
  }
}
