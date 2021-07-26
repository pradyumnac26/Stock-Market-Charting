import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ManagecompaniesComponent } from './components/managecompanies/managecompanies.component';
import { ManageexchangesComponent } from './components/manageexchanges/manageexchanges.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CompaniesComponent } from './components/companies/companies.component'; 
import { HttpClientModule } from '@angular/common/http';
import { IpodetailsComponent } from './components/ipodetails/ipodetails.component';
import { IpoService } from './shared/ipo.service';
import { SignupComponent } from './components/signup/signup.component';
import { UserService } from './shared/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AfterloginComponent } from './components/afterlogin/afterlogin.component';
import { UseripoComponent } from './components/useripo/useripo.component';
import { UsercompprofileComponent } from './components/usercompprofile/usercompprofile.component';
import { ComparecompComponent } from './components/comparecomp/comparecomp.component';
import { CompanydetailsComponent } from './components/companydetails/companydetails.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserLoginComponent,
    AdminComponent,
    DashboardComponent,
    ManagecompaniesComponent,
    ManageexchangesComponent,
    CompaniesComponent,
    IpodetailsComponent,
    SignupComponent,
    AfterloginComponent,
    UseripoComponent,
    UsercompprofileComponent,
    ComparecompComponent,
    CompanydetailsComponent
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [IpoService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
