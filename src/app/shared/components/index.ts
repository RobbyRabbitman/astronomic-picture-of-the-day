import { ErrorComponent } from './error';
import { GithubComponent } from './github';
import { ImageComponent } from './image';
import { ThemeToggleComponent } from './theme-toggle';

export * from './error';
export * from './image';
export * from './github';
export * from './theme-toggle';

export const exports: any[] = [
  ImageComponent,
  GithubComponent,
  ThemeToggleComponent,
];
export const declarations: any[] = [ErrorComponent, ...exports];
