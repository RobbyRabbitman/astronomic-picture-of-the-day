import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfigService } from '@core/services';
import { Observable } from 'rxjs';
import { DialogComponent } from './dialog/dialog.component';

export interface DialogData {
  api: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @Input() color: string;
  constructor(private dialog: MatDialog, private config: ConfigService) {}
  public open(): Observable<void> {
    return this.dialog
      .open<DialogComponent, DialogData>(DialogComponent, {
        data: { api: this.config.value.apod.api },
      })
      .afterClosed();
  }
}
