import { ErrorComponent } from './error';
import { GithubComponent } from './github';
import { ImageComponent } from './image';

export * from './error';
export * from './image';
export * from './github';

export const exports: any[] = [ImageComponent, GithubComponent];
export const declarations: any[] = [ErrorComponent, ...exports];
