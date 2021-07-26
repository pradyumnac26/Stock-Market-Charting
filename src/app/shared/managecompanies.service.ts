import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagecompaniesService {

  constructor(private http : HttpClient) { }

  postCompaniessData(formData: any)
  {
    return this.http.post(environment.apiBaseURL+'/ManageCompanies',formData)
  }
  getCompaniesList()
  {
    return this.http.get(environment.apiBaseURL+'/ManageCompanies')
  }
  putCompaniesData(formData: any)
  {
    return this.http.put(environment.apiBaseURL+'/ManageCompanies/' + formData.manageCompaniesId,formData)
  }
  DeleteCompaniesData(id: any)
  {
    return this.http.delete(environment.apiBaseURL+'/ManageCompanies/' + id)
  }
}
