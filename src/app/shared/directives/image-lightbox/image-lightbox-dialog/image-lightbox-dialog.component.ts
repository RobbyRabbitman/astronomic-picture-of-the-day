import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageLightbox } from './ImageLightbox';

@Component({
  selector: 'app-image-lightbox-dialog',
  templateUrl: './image-lightbox-dialog.component.html',
  styleUrls: ['./image-lightbox-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ImageLightboxDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public lightbox: ImageLightbox) {}
}
