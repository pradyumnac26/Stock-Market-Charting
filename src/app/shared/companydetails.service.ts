import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CompanyDetails } from './company-details.model';

@Injectable({
  providedIn: 'root'
})
export class CompanydetailsService {

 
  formData: CompanyDetails = new CompanyDetails;
  list: CompanyDetails[] | undefined ;
  

  constructor(private http : HttpClient) { }
  postCompaniesData(formData: CompanyDetails)
  {
    return this.http.post(environment.apiBaseURL+'/CompanyDetails',formData);
  }
  getCompaniesList()
  {
    return this.http.get(environment.apiBaseURL+'/CompanyDetails').toPromise().then(res=>this.list = res as CompanyDetails[]);
  }
  putCompaniesList(formData : CompanyDetails)
  {
    return this.http.put(environment.apiBaseURL+'/CompanyDetails/'+ this.formData.CompanyDetailsId,formData);
  }
  DeleteCompaniesData(id: any)
  {
    return this.http.delete(environment.apiBaseURL+'/CompanyDetails/' + id);
  }
}
