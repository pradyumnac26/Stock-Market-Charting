import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyDetails } from 'src/app/shared/company-details.model';
import { CompanydetailsService } from 'src/app/shared/companydetails.service';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {

  constructor(public service : CompanydetailsService,@Inject(Router) private router : Router) { }

  ngOnInit(): void {
    this.resetForm();
    this.service.getCompaniesList();
  }
  resetForm(form? : NgForm)
  {
    
    this.service.formData = {
      CompanyDetailsId : undefined,
      CompanyName : '',
      Ceo : '',
      TurnOver : '',
      BriefDescription : '',
      IpoDate : ''
      


    }
  }
  onBubmit(form : NgForm)
  {
    if(form.value.ipoDetailsId == undefined)
      this.insertRecord(form);
      else
      {
        this.updateRecord(form);
      }

  }
  insertRecord(form:NgForm)
  {
      this.service.postCompaniesData(form.value).subscribe(res => {
        this.resetForm(form);
        this.service.getCompaniesList();
      });
  }
  populateForm(comp : CompanyDetails )
  {
    this.service.formData = Object.assign({},comp) ;
  }
  updateRecord(form:NgForm)
  {
    this.service.putCompaniesList(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.getCompaniesList();
    });

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
      this.router.navigate(['/adminnavbar']);
    }
  }


}
