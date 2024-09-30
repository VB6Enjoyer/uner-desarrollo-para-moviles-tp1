import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonButton, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonButton, IonItem, IonLabel, IonInput],
  //imports: [IonicModule, FormsModule]
})
export class ProfileComponent {
  username: string = 'Estudiante UNER';
  email: string = 'estudiante@uner.edu';
  todayDate: string = new Date().toLocaleDateString();
  profilePicUrl: string = 'assets/uner.png';

  editing: boolean = false;
  newUsername: string = this.username;
  newEmail: string = this.email;
  newProfilePicUrl: string = this.profilePicUrl;

  constructor() { }

  editProfile() {
    this.editing = true;
  }

  saveProfile() {
    this.username = this.newUsername;
    this.email = this.newEmail;
    this.editing = false;
  }

  cancelEdit() {
    this.editing = false;
  }
}
