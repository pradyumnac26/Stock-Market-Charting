import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyDetails } from 'src/app/shared/company-details.model';
import { CompanydetailsService } from 'src/app/shared/companydetails.service';

@Component({
  selector: 'app-usercompprofile',
  templateUrl: './usercompprofile.component.html',
  styleUrls: ['./usercompprofile.component.css']
})
export class UsercompprofileComponent implements OnInit {

  constructor(public service : CompanydetailsService,@Inject(Router) private router : Router) { }

  ngOnInit(): void {
  }
  populateForm(comp : CompanyDetails )
  {
    this.service.formData = Object.assign({},comp) ;
  }
  nDelete(id : number)
  {
    if(confirm('Are you sure to delete this record'))
    {
      this.service.DeleteCompaniesData(id).subscribe(res => {
        this.service.getCompaniesList();
      });
   

    }

  }
  onBk()
  {
    {
      console.log('done');
      this.router.navigate(['/afterlogin']);
    }
  }



}
