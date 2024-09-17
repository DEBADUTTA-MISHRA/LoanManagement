import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password.component';
import { LoanApplicationComponent } from './modules/loan/loan-application/loan-application.component';
import { LoanStatusComponent } from './modules/loan/loan-status/loan-status.component';
import { LoanManagementComponent } from './modules/loan/loan-management/loan-management.component';
import { UserProfileComponent } from './modules/user/user-profile/user-profile.component';
import { UserListComponent } from './modules/user/user-list/user-list.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'dashboard', component: DashboardComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'loan-application', component: LoanApplicationComponent, canActivate: [AuthGuardService] },
  { path: 'loan-status', component: LoanStatusComponent, canActivate: [AuthGuardService] },
  { path: 'loan-management', component: LoanManagementComponent, canActivate: [AuthGuardService] },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuardService] },
  { path: 'user-list', component: UserListComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
