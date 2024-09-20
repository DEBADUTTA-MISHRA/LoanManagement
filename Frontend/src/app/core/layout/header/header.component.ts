import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Replace with actual user data from your auth service
  username: string = 'John Doe';
  userEmail: string = 'johndoe@example.com';
  userPhotoUrl: string = 'assets/user-photo.jpg';

  showUserMenu: boolean = false;
  sidebarVisible: boolean = true;

  // Toggles the sidebar
  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    sidebar.style.display = this.sidebarVisible ? 'block' : 'none';
  }

  // Toggles the user menu dropdown
  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
  }

  // Opens the notifications panel
  openNotifications(): void {
    console.log('Opening notifications...');
    // Implement notification logic here
  }

  // Opens the support panel
  openSupport(): void {
    console.log('Opening support...');
    // Implement support logic here
  }

  // Handle the logout action
  logout(): void {
    console.log('Logging out...');
    // Implement logout logic here (e.g., AuthService.logout(), routing to login page)
  }

  // Handle the update profile action
  updateProfile(): void {
    console.log('Redirecting to update profile...');
    // Implement profile update logic here (e.g., route to the profile update page)
  }
}
