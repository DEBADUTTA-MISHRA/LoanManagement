import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { NotificationService } from '../../../services/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  onLogin(): void {
    this.authService.login(this.loginData).subscribe(
      (response) => {
        console.log("response token", response.data.token);
        localStorage.setItem('token', response.data.token);
        this.router.navigate(['/dashboard']);
        this.notificationService.showSuccess('Login successful!');
      },
      (error) => {
        this.errorMessage = 'Invalid credentials';
        this.notificationService.showError('Login failed. Please try again.');
      }
    );
  }

  navigateToSignUp(): void {
    this.router.navigate(['/signup']); // Adjust the route as per your setup
  }
}
