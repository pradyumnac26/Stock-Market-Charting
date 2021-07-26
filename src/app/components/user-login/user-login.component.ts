import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  formModel = {
    UserName :'',
    Password :''
  }

  constructor(private service : UserService,private router : Router,private toastr : ToastrService) { }


  ngOnInit(): void {
  }
onSummit(form :NgForm)
{
this.service.login(form.value).subscribe((res :any) => {
  localStorage.setItem('token',res.token);
  this.router.navigateByUrl('/afterlogin')
},
err => {
  if(err.status == 400)
  this.toastr.error('Incorrect UserName or Passwowrd','Authentication failed');
  else 
  console.log(err);
  
}
);
}
}
