import { InjectionToken } from '@angular/core';

export const GITHUB_URI: InjectionToken<string> = new InjectionToken<string>(
  'Github uri'
);
export const GITHUB_URI_TITLE: InjectionToken<string> = new InjectionToken<string>(
  'Description of the Page the GITHUB_URI Token is linking to'
);
