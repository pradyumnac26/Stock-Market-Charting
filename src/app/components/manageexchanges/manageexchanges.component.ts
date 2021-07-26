import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BeService } from 'src/app/shared/be.service';
import { ExchangesService } from 'src/app/shared/exchanges.service';


@Component({
  selector: 'app-manageexchanges',
  templateUrl: './manageexchanges.component.html',
  styleUrls: ['./manageexchanges.component.css']
})
export class ManageexchangesComponent implements OnInit {
  exchangeforms : FormArray=this.fb.array([]);
  exchangeList = [];
  notification: any;
 
  
  

  constructor(private fb : FormBuilder,private beService : BeService, private exchangeService : ExchangesService, @Inject(Router) private router : Router) { }

  ngOnInit(): void {
    this.beService.getexchangeslist().subscribe(res => this.exchangeList = res as []);
    
    this.exchangeService.getExchangeList().subscribe(res => {
      if (res==[]){
        this.addexchanges();
      }
      else {
        (res as[]).forEach((bankaccount:any)=> 
        {
          this.exchangeforms.push(this.fb.group({
            stockExchangeId : [bankaccount.stockExchangeId],
            stockExchanges : [bankaccount.stockExchange, Validators.required],
            brief : [bankaccount.brief, Validators.required],
            contactAddress : [bankaccount.contactAddress, Validators.required],
            remarks :[bankaccount.remarks ]
          }));
        });
      }
    })
   
  }
  
  addexchanges()
  {
    this.exchangeforms.push(this.fb.group({
      stockExchangeId : [0],
      stockExchanges : ['', Validators.required],
      brief : ['', Validators.required],
      contactAddress : ['', Validators.required],
      remarks :['']
    }));
  }
  recordSubmit(fg : FormGroup){
    if(fg.value.stockExchangeId == 0)
  
    this.exchangeService.postExchangesData(fg.value).subscribe((res :any ) =>{
fg.patchValue({stockExchangeId : res.stockExchangeId});
this.showNotification('insert');
    });

    else 
    this.exchangeService.putExchangesData(fg.value).subscribe((res :any ) =>{
      this.showNotification('update');
      
          });

    
    

  

  }
  onDelete(stockExchangeId: any ,i: number)
  {
    if(stockExchangeId == 0)
    this.exchangeforms.removeAt(i)
    else if (confirm('Are you sure to delete this record'))
      this.exchangeService.DeleteExchangesData(stockExchangeId).subscribe(
        res =>{
            this.exchangeforms.removeAt(i)
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
  onBack()
  {
    console.log('done');
    this.router.navigate(['/adminnavbar']);
  }
}

