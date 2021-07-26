import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ipo } from 'src/app/shared/ipo.model';
import { IpoService } from 'src/app/shared/ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipodetails',
  templateUrl: './ipodetails.component.html',
  styleUrls: ['./ipodetails.component.css']
})
export class IpodetailsComponent implements OnInit {
  

  constructor(public iposervice : IpoService,@Inject(Router) private router : Router) { }

  ngOnInit(): void {
    this.resetForm();
    this.iposervice.getIpoList();
   
  }
  resetForm(form? : NgForm)
  {
    
    this.iposervice.formData = {
      IpoDetailsId : undefined,
      Companyname : '',
      StockExchange : '',
      Pricepershare : undefined,
      Totalshares : undefined,
      Opendatetime : '',
      Remarks : ''


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
      this.iposervice.postIpoData(form.value).subscribe(res => {
        this.resetForm(form);
        this.iposervice.getIpoList();
      });
  }
  populateForm(ipo : Ipo)
  {
    this.iposervice.formData = Object.assign({},ipo) ;
  }
  updateRecord(form:NgForm)
  {
    this.iposervice.putIpoList(form.value).subscribe(res => {
      this.resetForm(form);
      this.iposervice.getIpoList();
    });

  }
  nDelete(id : number)
  {
    if(confirm('Are you sure to delete this record'))
    {
      this.iposervice.DeleteIpoData(id).subscribe(res => {
        this.iposervice.getIpoList();
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
