import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { ErrorComponent } from './error.component';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private dialog: MatDialog) {}

  showErrorInDialog(error: Error): Observable<void> {
    const ref = this.dialog.open(ErrorComponent, { data: error });
    return ref.afterClosed().pipe(mapTo(null));
  }
}
