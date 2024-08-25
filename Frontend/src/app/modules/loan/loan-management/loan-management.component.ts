import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../../services/loan/loan.service';

@Component({
  selector: 'app-loan-management',
  templateUrl: './loan-management.component.html',
  styleUrls: ['./loan-management.component.scss']
})
export class LoanManagementComponent implements OnInit {
  loans: any[] = [];
  errorMessage: string = '';

  constructor(private loanService: LoanService) {}

  ngOnInit(): void {
    this.loanService.getAllLoans().subscribe(
      (loans) => {
        this.loans = loans;
      },
      (error) => {
        this.errorMessage = 'Failed to retrieve loans';
      }
    );
  }
}
