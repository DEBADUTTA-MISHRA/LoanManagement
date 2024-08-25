import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, credentials).pipe(
      catchError(error => {
        console.error('Login error:', error);
        return of(null); // Handle the error and return null or an appropriate fallback
      })
    );
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/register`, userData).pipe(
      catchError(error => {
        console.error('Registration error:', error);
        return of(null); // Handle the error and return null or an appropriate fallback
      })
    );
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/forgot-password`, { email }).pipe(
      catchError(error => {
        console.error('Forgot password error:', error);
        return of(null); // Handle the error and return null or an appropriate fallback
      })
    );
  }

  isAuthenticated(): Observable<boolean> {
    const token = localStorage.getItem('authToken');
    return of(!!token); // Check if token exists
  }

  getUserProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/profile`).pipe(
      catchError(error => {
        console.error('Get user profile error:', error);
        return of(null); // Handle the error and return null or an appropriate fallback
      })
    );
  }
}
