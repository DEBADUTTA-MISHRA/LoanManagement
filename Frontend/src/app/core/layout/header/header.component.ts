import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // For demo purposes, replace these with actual user data from your auth service
  username: string = 'John Doe';
  userEmail: string = 'johndoe@example.com';
  userPhotoUrl: string = 'assets/user-photo.jpg';

  showUserMenu: boolean = false;
  sidebarVisible: boolean = true;

  // Toggles the sidebar
  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    if (this.sidebarVisible) {
      sidebar.style.display = 'block';
    } else {
      sidebar.style.display = 'none';
    }
  }

  // Toggles the user menu dropdown
  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
  }

  // Handle the logout action
  logout(): void {
    // Implement logout logic here (e.g., AuthService.logout(), routing to login page)
    console.log('Logging out...');
  }
}
