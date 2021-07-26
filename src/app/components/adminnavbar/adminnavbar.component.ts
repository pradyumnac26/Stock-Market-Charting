import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {RouterModule} from '@angular/router';



@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {
  [x: string]: any;

  constructor(@Inject(Router) private router:Router) { }

  ngOnInit(): void {
  }
  onClick()
  {
    console.log('done');
    this.router.navigate(['/manageexchanges']);
  }
  onBlip()
  {
    console.log('done');
    this.router.navigate(['/managecompanies']);
  }
  onFlick()
  {
    console.log('done');
    this.router.navigate(['/ipodetails']);
  }
  onRip()
  {
    this.router.navigate(['/companydetails']);

  }

}
