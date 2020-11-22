import { Config } from '@core/model';

export const environment: Config = {
  production: true,
  apod: {
    api: 'https://api.nasa.gov/planetary/apod',
    key: 'DEMO_KEY',
  },
};
