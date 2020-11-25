import { ErrorComponent } from './error';
import { ImageComponent } from './image';

export * from './error';
export * from './image';

export const exports: any[] = [ImageComponent];
export const declarations: any[] = [ErrorComponent, ...exports];
