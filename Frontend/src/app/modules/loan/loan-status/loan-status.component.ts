import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../../services/loan/loan.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loan-status',
  templateUrl: './loan-status.component.html',
  styleUrls: ['./loan-status.component.scss']
})
export class LoanStatusComponent implements OnInit {
  loanId: string | null = null;
  loanStatus: any;

  constructor(
    private loanService: LoanService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Retrieve loanId from route parameters or other sources
    this.route.paramMap.subscribe(params => {
      this.loanId = params.get('loanId');
      if (this.loanId) {
        this.getLoanStatus();
      }
    });
  }

  getLoanStatus(): void {
    if (this.loanId) {
      this.loanService.getLoanStatus(this.loanId).subscribe(
        (data:any) => {
          this.loanStatus = data;
        },
        (error:any) => {
          console.error('Error fetching loan status:', error);
        }
      );
    }
  }
}
