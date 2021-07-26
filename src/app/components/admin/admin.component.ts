import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  email:string | undefined;
  password : string | undefined ;
  


  constructor(@Inject(Router) private router:Router) { 
    
  }

  ngOnInit(): void {
  }
  logIn()
  {
    if(this.email=="admin@gmail.com" && this.password=="admin")
    {
      console.log('done');
      this.router.navigate(['/adminnavbar']);
    }
    else {
      alert("Please enter valid details");
    }

  }

}
