import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user!: User;

  constructor(public service : UserService, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form? : NgForm)
  {
    if(form!=null)
    form.reset();
    this.user ={
      UserName : '',
      Password : '',
      Email : '',
      MobileNumber : ''

    }

  }
  onSbmit()
  {
    this.service.register().subscribe(
      (res:any)=>{
        if(res.succeeded) {
        this.service.formModel.reset();
        this.toastr.success('U have Signed up, Please Login !','Registration Succesfull');}
        else {
          res.forEach((element: { code: any; }) => {
            switch(element.code)
            {
              case 'DuplicateUserName' : 
              this.toastr.error('Username is already taken');
              break;
              default : 
              
              
              break ;
            }
            
          });
        }

      },
      err =>{
        console.log(err);
      }
    )
  }

}
