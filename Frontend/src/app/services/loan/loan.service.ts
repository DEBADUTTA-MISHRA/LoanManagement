/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiUrl = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient) {}

  getAllLoans(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/loans`);
  }

  getLoanById(loanId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/loans/${loanId}`);
  }

  applyLoan(loanData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/loans/apply`, loanData);
  }

  getLoanStatus(loanId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/loans/status/${loanId}`);
  }

  updateLoan(loanId: string, loanData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/loans/${loanId}`, loanData);
  }
}
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getAllLoans(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/loans`);
  }

  getLoanById(loanId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/loans/${loanId}`);
  }

  applyLoan(loanData: any): Observable<any> {
    const token = localStorage.getItem('token');
    console.log("token",token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    console.log("headers",headers);
    return this.http.post<any>(`${this.apiUrl}/loans/apply`, loanData, { headers });
  }

  getLoanStatus(loanId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/loans/status/${loanId}`);
  }

  updateLoan(loanId: string, loanData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/loans/${loanId}`, loanData);
  }
}
