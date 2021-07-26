import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.css']
})
export class AfterloginComponent implements OnInit {
  userDetails: any;

  constructor(private service : UserService,private router : Router) { }

  ngOnInit(): void {
    this.service.getUserProfile().subscribe(res=>
      {this.userDetails = res;
      },
      err=>{console.log(err);
      
      });
  }
  onSlick()
  {
    this.router.navigate(['/useripo']);
  }
  onSlip()
  {
    this.router.navigate(['/compprofile']);

  }
  onDlick()
  {
    this.router.navigate(['/comparecompanies']);
  }

}
