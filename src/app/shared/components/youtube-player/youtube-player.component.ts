import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  Input,
  OnInit,
  Optional,
  ViewEncapsulation,
} from '@angular/core';
import { LOGGER, Logger } from '@core/model';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class YoutubePlayerComponent implements OnInit {
  private static readonly API: string = 'https://www.youtube.com/iframe_api';
  private static LOADED: boolean = false;
  @Input()
  videoId: string;

  constructor(
    @Inject(LOGGER) @Optional() private logger: Logger,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // TODO in Service?
    if (!YoutubePlayerComponent.LOADED) {
      const tag = document.createElement('script');
      tag.src = YoutubePlayerComponent.API;
      this.document.body.appendChild(tag);
      this.logger?.trace('Youtube iframe api appended to document');
      YoutubePlayerComponent.LOADED = true;
    }
  }
}
