import { ErrorComponent } from './error';
import { GithubComponent } from './github';
import { ImageComponent } from './image';
import { ThemeToggleComponent } from './theme-toggle';
import { YoutubePlayerComponent } from './youtube-player';

export * from './error';
export * from './image';
export * from './github';
export * from './theme-toggle';
export * from './youtube-player';

export const exports: any[] = [
  ImageComponent,
  GithubComponent,
  ThemeToggleComponent,
  YoutubePlayerComponent,
];
export const declarations: any[] = [ErrorComponent, ...exports];
