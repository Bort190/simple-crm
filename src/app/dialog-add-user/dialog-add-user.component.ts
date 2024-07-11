import { Component, inject } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepicker, MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { User } from '../../models/user.class';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MatDialogTitle, MatLabel, MatHint, MatDatepickerModule, MatDatepickerToggle, MatDatepicker],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class DialogAddUserComponent {

  firestore: Firestore = inject(Firestore);

  user: User = new User();
  birthdate!: Date;

  async saveUser() {
    this.user.birthDate = this.birthdate?.getTime();
    console.log(this.user);

    await addDoc(collection(this.firestore, "users"), this.user.toJSON()).catch((err) => console.log(err)).then((result) => console.log(result));

  }
}
