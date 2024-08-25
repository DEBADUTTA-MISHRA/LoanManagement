import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSource = new Subject<string>();
  notifications$ = this.notificationSource.asObservable();

  showSuccess(message: string): void {
    this.notificationSource.next(`Success: ${message}`);
  }

  showError(message: string): void {
    this.notificationSource.next(`Error: ${message}`);
  }
}
