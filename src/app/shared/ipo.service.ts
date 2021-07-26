import { Injectable } from '@angular/core';
import { Ipo } from './ipo.model';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IpoService {
  formData: Ipo = new Ipo;
  list: Ipo[] | undefined ;
  

  constructor(private http : HttpClient) { }
  postIpoData(formData: Ipo)
  {
    return this.http.post(environment.apiBaseURL+'/IpoDetails',formData);
  }
  getIpoList()
  {
    return this.http.get(environment.apiBaseURL+'/IpoDetails').toPromise().then(res=>this.list = res as Ipo[]);
  }
  putIpoList(formData : Ipo)
  {
    return this.http.put(environment.apiBaseURL+'/IpoDetails/'+ this.formData.IpoDetailsId,formData);
  }
  DeleteIpoData(id: any)
  {
    return this.http.delete(environment.apiBaseURL+'/IpoDetails/' + id);
  }
}
