import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { LocalStorageService } from '@core/services';
import { BehaviorSubject, Observable } from 'rxjs';
import { pairwise, tap } from 'rxjs/operators';
import { Theme } from './Theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly _theme$: BehaviorSubject<Theme>;
  private readonly KEY: string = 'apod-theme';

  constructor(
    private localStorage: LocalStorageService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this._theme$ = new BehaviorSubject<Theme>(
      this.localStorage.read<Theme>(this.KEY) || Theme.LIGHT
    );
    this.document.body.classList.add(this._theme$.value);
    this.theme$
      .pipe(
        tap((theme) => this.localStorage.write(this.KEY, theme)),
        pairwise()
      )
      .subscribe({
        next: ([oldValue, newValue]) =>
          this.document.body.classList.replace(oldValue, newValue),
      });
  }

  get theme$(): Observable<Theme> {
    return this._theme$.asObservable();
  }

  get theme(): Theme {
    return this._theme$.value;
  }

  set theme(value: Theme) {
    this._theme$.next(value);
  }
}
