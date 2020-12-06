import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MaterialModule } from './material';

export const modules: any[] = [
  CommonModule,
  ReactiveFormsModule,
  RouterModule,
  MaterialModule,
  YouTubePlayerModule,
  FlexLayoutModule,
];
