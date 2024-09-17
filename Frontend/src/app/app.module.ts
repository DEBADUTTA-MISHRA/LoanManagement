import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password.component';
import { LoanApplicationComponent } from './modules/loan/loan-application/loan-application.component';
import { LoanStatusComponent } from './modules/loan/loan-status/loan-status.component';
import { LoanManagementComponent } from './modules/loan/loan-management/loan-management.component';
import { UserProfileComponent } from './modules/user/user-profile/user-profile.component';
import { UserListComponent } from './modules/user/user-list/user-list.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LoanApplicationComponent,
    LoanStatusComponent,
    LoanManagementComponent,
    UserProfileComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AlertComponent,
    ModalComponent,
    LoaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
