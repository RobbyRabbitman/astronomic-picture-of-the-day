import {
  ImageLightboxDialogComponent,
  ImageLightboxDirective,
} from './image-lightbox';

export * from './image-lightbox';

export const exports: any[] = [ImageLightboxDirective];
export const declarations: any[] = [ImageLightboxDialogComponent, ...exports];
