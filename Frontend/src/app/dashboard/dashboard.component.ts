import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private router: Router) {}

  // Example data
  totalUsers = 100;
  totalApprovedLoans = 75;
  totalOverdueLoans = 10;
  totalLoanApplications = 120;
  totalRejectedLoans = 15;
  totalLoanAmountDisbursed = 500000;
  totalRepaymentsReceived = 200000;
  activeLoans = 50;
  loanDefaultRate = 5; // percentage
  newUsersThisMonth = 20;
  newLoanApplicationsThisMonth = 30;
  averageLoanAmount = 10000;
  userEngagement = 85; // percentage

  viewDetails(field: string) {
    // Implement navigation or modal logic based on the field clicked
    console.log(`View details for: ${field}`);
    // For example, you can navigate to a detailed view or open a modal
  }

  onLogout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
