import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SectorService } from 'src/app/shared/sector.service';
import {ExchCompService} from 'src/app/shared/exchcomp.service';
import { ManagecompaniesService } from 'src/app/shared/managecompanies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managecompanies',
  templateUrl: './managecompanies.component.html',
  styleUrls: ['./managecompanies.component.css']
})
export class ManagecompaniesComponent implements OnInit {
  companyforms : FormArray=this.fb.array([]);
  sectorList = [];
  exchcompList =[];
  
  notification :any;

  constructor(private fb : FormBuilder,private sectorservice : SectorService,private exchangecomp : ExchCompService,private service : ManagecompaniesService, @Inject(Router) private router : Router) { }

  ngOnInit(): void {
    this.sectorservice.getsectorlist().subscribe(
      res=> this.sectorList = res as[]
    );
    this.exchangecomp.getexchcomplist().subscribe(
      res=>this.exchcompList = res as []
    );
    this.service.getCompaniesList().subscribe(res => {
      if (res==[]){
        this.addCompanies();
      }
      else {
        (res as[]).forEach((bankacc:any)=> 
        {
          this.companyforms.push(this.fb.group({
            manageCompaniesId : [bankacc.manageCompaniesId],
            companies : [bankacc.companies, Validators.required],
            sectorNameId : [bankacc.sectorNameId],
            exchangesId : [bankacc.exchangesId],
            remarks :[bankacc.remarks ]
          }));
        });
      }
    })
   
  }
  
  addCompanies()
  {
    this.companyforms.push(this.fb.group({
      manageCompaniesId : [0],
      companies : ['', Validators.required],
      sectorNameId : [0],
      exchangesId : [0]
      
    }));
  }
  seeSubmit(fg : FormGroup){
    if(fg.value.manageCompaniesId == 0)
  
    this.service.postCompaniessData(fg.value).subscribe((res :any ) =>{
fg.patchValue({manageCompaniesId : res.manageCompaniesId});
this.showNotification('insert');
    });

    else 
    this.service.putCompaniesData(fg.value).subscribe((res :any ) =>{
      this.showNotification('update');
      
          });
        }
        onDelet(manageCompaniesId: any ,i: number)
        {
          if(manageCompaniesId == 0)
          this.companyforms.removeAt(i)
          else if (confirm('Are you sure to delete this record'))
            this.service.DeleteCompaniesData(manageCompaniesId).subscribe(
              res =>{
                  this.companyforms.removeAt(i)
                  this.showNotification('delete');
              }
            );
        }
        showNotification(category: string){
          switch(category)
          {
            case 'insert' :
              this.notification = {class : 'text-success',message :'saved!'};
              break;
            case 'update' :
              this.notification = {class : 'text-primary',message : 'Updated!'};
              break;
            case 'delete' :
              this.notification = {class : 'text-danger',message : 'Deleted!'};
              break;
              default :
              break;
      
          }
          setTimeout(() => {
            this.notification= null;
          }, 3000);
        }
        onBac()
        {
          console.log('done');
          this.router.navigate(['/adminnavbar']);
        }
      }
      
      
