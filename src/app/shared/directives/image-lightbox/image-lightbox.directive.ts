import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnInit,
  Optional,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Logger, LOGGER } from '@core/model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  ImageLightbox,
  ImageLightboxDialogComponent,
} from './image-lightbox-dialog';

@Directive({
  selector: '[appImageLightbox]',
})
export class ImageLightboxDirective {
  @Input() public src: string;
  @Input() public title: string;

  constructor(
    private el: ElementRef,
    private dialog: MatDialog,
    @Inject(LOGGER) @Optional() private logger: Logger
  ) {}

  @HostListener('click')
  onClick = this.open;

  @HostListener('mouseenter')
  onMouseEnter = () => this.cursor('pointer');

  @HostListener('mouseleave')
  onMouseLeave = () => this.cursor('initial');

  private cursor(cursor: 'pointer' | 'initial') {
    this.el.nativeElement.style.cursor = cursor;
  }

  public open(): Observable<void> {
    this.logger?.trace(
      `Lightbox opened: source: ${this.src}, title: ${this.title}`
    );
    return this.dialog
      .open<ImageLightboxDialogComponent, ImageLightbox>(
        ImageLightboxDialogComponent,
        {
          data: { src: this.src, title: this.title },
          panelClass: 'lightbox-dialog',
        }
      )
      .afterClosed();
  }
}
