import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIcon, MatButtonModule, MatTooltipModule, MatDialogModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  user: User = new User();

  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  
}
