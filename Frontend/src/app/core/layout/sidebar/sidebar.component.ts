import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

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

  constructor(private authService: AuthService) { }

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
    // Example: this.loanService.applyForLoan(loanData).subscribe(response => { ... });

    // Close the form after submission
    this.closeLoanForm();
  }
}
