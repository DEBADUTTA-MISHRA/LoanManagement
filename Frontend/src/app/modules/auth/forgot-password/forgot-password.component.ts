import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { NotificationService } from '../../../services/notification/notification.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  email: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  onForgotPassword(): void {
    this.authService.forgotPassword(this.email).subscribe(
      () => {
        this.successMessage = 'Password reset link sent to your email.';
        this.notificationService.showSuccess('Password reset link sent!');
      },
      (error) => {
        this.errorMessage = 'Failed to send reset link';
        this.notificationService.showError('Failed to send reset link. Please try again.');
      }
    );
  }
}
