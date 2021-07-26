import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) {

   }
   formModel = this.fb.group({
    UserName: ['', Validators.required],
    Password: ['', Validators.required],
    Email : [''],
    MobileNumber : ['']
  

  });
  
    register() {
      var body = {
        UserName: this.formModel.value.UserName,
        Password: this.formModel.value.Password,
        Email: this.formModel.value.Email,
        MobileNumber: this.formModel.value.MobileNumber,
        
       
        
      };
      return this.http.post(environment.apiBaseURL+ '/ApplicationUser/Register', body);
    }

    login(formData: any){
      return this.http.post(environment.apiBaseURL+ '/ApplicationUser/Login', formData);



    }
    getUserProfile()
    {
      var tokenHeader = new HttpHeaders({'Authorization' : 'Bearer' + localStorage.getItem('token')})
      return this.http.get(environment.apiBaseURL + '/UserProfile',{headers : tokenHeader});
    }
  }


