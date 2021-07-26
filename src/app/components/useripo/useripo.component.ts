import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IpoService } from 'src/app/shared/ipo.service';

@Component({
  selector: 'app-useripo',
  templateUrl: './useripo.component.html',
  styleUrls: ['./useripo.component.css']
})
export class UseripoComponent implements OnInit {

  constructor(public iposervice : IpoService, @Inject(Router) private router : Router) { }

  ngOnInit(): void {
  }
  onBk()
  {
    
      console.log('done');
      this.router.navigate(['/afterlogin']);
    
  }


}
