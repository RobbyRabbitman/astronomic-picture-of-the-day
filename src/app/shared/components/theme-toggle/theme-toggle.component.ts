import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Theme } from './Theme';
import { ThemeService } from './theme.service';

interface ThemeItem {
  icon: string;
  description: string;
  theme: Theme;
}

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
  private static readonly toggleMap = new Map<Theme, ThemeItem>([
    [
      Theme.LIGHT,
      {
        description: 'Dark Theme',
        icon: 'brightness_4',
        theme: Theme.DARK,
      },
    ],
    [
      Theme.DARK,
      {
        description: 'Light Theme',
        icon: 'brightness_5',
        theme: Theme.LIGHT,
      },
    ],
  ]);

  @Input() color: string;

  private _themeItem$: Observable<ThemeItem>;

  constructor(private readonly theme: ThemeService) {}

  ngOnInit(): void {
    this._themeItem$ = this.theme.theme$.pipe(
      map((theme) => ThemeToggleComponent.toggleMap.get(theme))
    );
  }

  public get themeItem$(): Observable<ThemeItem> {
    return this._themeItem$;
  }

  public next(theme: Theme): void {
    this.theme.theme = theme;
  }
}
