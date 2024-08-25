import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { NotificationService } from '../../../services/notification/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registrationData = {
    name: '',
    email: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  onRegister(): void {
    this.authService.register(this.registrationData).subscribe(
      () => {
        this.router.navigate(['/login']);
        this.notificationService.showSuccess('Registration successful! Please log in.');
      },
      (error) => {
        this.errorMessage = 'Registration failed';
        this.notificationService.showError('Failed to register. Please try again.');
      }
    );
  }
}
