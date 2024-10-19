import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { LoanService } from '../../../services/loan/loan.service';
import { NotificationService } from '../../../services/notification/notification.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isAdmin: boolean = false;

  showLoanForm: boolean = false;
  loanAmount: number = 1000;
  interestRate: number = 5;
  durationInMonths: number = 3;

  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private loanService:LoanService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    const userRole = this.authService.getUserRole(); // Example: 'admin', 'user', etc.
    this.isAdmin = userRole === 'admin'; // Check if the user is an admin
  }

  // Open the loan application form
  openLoanForm(): void {
    this.showLoanForm = true;
  }

  // Close the loan application form
  closeLoanForm(): void {
    this.showLoanForm = false;
  }

  // Handle loan application form submission
  applyForLoan(): void {
    const loanData = {
      loanAmount: this.loanAmount,
      interestRate: this.interestRate,
      durationInMonths: this.durationInMonths
    };

    console.log('Applying for loan with data:', loanData);

    // Call your loan application API here
    this.loanService.applyLoan(loanData).subscribe(
      () => {
        this.notificationService.showSuccess('Loan application submitted successfully!');
      },
      (error) => {
        this.errorMessage = 'Failed to apply for loan';
        this.notificationService.showError('Loan application failed. Please try again.');
      }
    );

    // Close the form after submission
    this.closeLoanForm();
  }
}
