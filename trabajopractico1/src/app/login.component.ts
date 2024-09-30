import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone'
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonInput, IonButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Mock user data
  mockUsername: string = 'user';
  mockPassword: string = '12345';

  constructor(private router: Router) { }

  onSubmit() {
    if (this.username === this.mockUsername && this.password === this.mockPassword) {
      this.router.navigateByUrl('/tabs/home'); // Redirect to Home
    } else {
      this.errorMessage = 'Invalid username or password!';
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}

