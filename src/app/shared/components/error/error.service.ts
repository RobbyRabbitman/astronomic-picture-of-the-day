import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { ErrorComponent } from './error.component';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private dialog: MatDialog, private snackbar: MatSnackBar) {}

  public showErrorInDialog(error: Error): Observable<void> {
    const ref = this.dialog.open(ErrorComponent, { data: error });
    return ref.afterClosed().pipe(mapTo(null));
  }

  public showErrorInSnackbar(
    error: Error,
    config: MatSnackBarConfig = { duration: 2000 }
  ): Observable<void> {
    const ref = this.snackbar.open(
      `${error.name ? error.name + ': ' : ''}${error.message}`,
      'close',
      config
    );
    return ref.afterDismissed().pipe(mapTo(null));
  }
}
