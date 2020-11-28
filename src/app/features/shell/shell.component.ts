import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { StoreService } from '@core/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  public readonly small$: Observable<boolean>;
  constructor(public store: StoreService, layout: BreakpointObserver) {
    this.small$ = layout
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .pipe(map((state) => state.matches));
  }
}
