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
}
