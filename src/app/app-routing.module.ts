import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AdminComponent} from './components/admin/admin.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AdminnavbarComponent } from './components/adminnavbar/adminnavbar.component';
import { ManagecompaniesComponent } from './components/managecompanies/managecompanies.component';
import { ManageexchangesComponent } from './components/manageexchanges/manageexchanges.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { IpodetailsComponent } from './components/ipodetails/ipodetails.component';
import { SignupComponent } from './components/signup/signup.component';
import { AfterloginComponent } from './components/afterlogin/afterlogin.component';
import { UseripoComponent } from './components/useripo/useripo.component';
import { UsercompprofileComponent } from './components/usercompprofile/usercompprofile.component';
import { ComparecompComponent } from './components/comparecomp/comparecomp.component';
import { CompanydetailsComponent } from './components/companydetails/companydetails.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes =[
  {path : '',  component: DashboardComponent},
  {path : 'login',  component: UserLoginComponent},
  {path : 'admin',  component: AdminComponent},
  {path : 'adminnavbar' , component : AdminnavbarComponent },
  {path : 'managecompanies' , component : ManagecompaniesComponent},
  {path : 'manageexchanges', component : ManageexchangesComponent},
  {path : 'companies', component : CompaniesComponent},
  {path : 'ipodetails' , component : IpodetailsComponent},
  {path : 'signup' , component : SignupComponent},
  {path : 'afterlogin' ,component : AfterloginComponent,canActivate : [AuthGuard]},
  {path : 'useripo',component : UseripoComponent},
  {path : 'compprofile',component : UsercompprofileComponent},
  {path : 'comparecompanies', component : ComparecompComponent},
  {path : 'companydetails', component : CompanydetailsComponent}


    
  
  
 
];



@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],declarations: []
})
export class AppRoutingModule { }
