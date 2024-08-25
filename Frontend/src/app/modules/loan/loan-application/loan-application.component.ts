import { Component } from '@angular/core';
import { LoanService } from '../../../services/loan/loan.service';
import { NotificationService } from '../../../services/notification/notification.service';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.scss']
})
export class LoanApplicationComponent {
  loanData = {
    amount: '',
    tenure: '',
    purpose: ''
  };
  errorMessage: string = '';

  constructor(
    private loanService: LoanService,
    private notificationService: NotificationService
  ) {}

  onApplyLoan(): void {
    this.loanService.applyLoan(this.loanData).subscribe(
      () => {
        this.notificationService.showSuccess('Loan application submitted successfully!');
      },
      (error) => {
        this.errorMessage = 'Failed to apply for loan';
        this.notificationService.showError('Loan application failed. Please try again.');
      }
    );
  }
}
