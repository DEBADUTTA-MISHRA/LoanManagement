import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isAdmin: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Assuming your AuthService has a method to get the current user's role
    const userRole = this.authService.getUserRole(); // Example: 'admin', 'user', etc.
    this.isAdmin = userRole === 'admin'; // Check if the user is an admin
  }
}
