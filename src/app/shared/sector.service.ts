import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  

  constructor(private http : HttpClient) { }
  getsectorlist()
  {
    return this.http.get(environment.apiBaseURL + '/SectorNames')
  }
}
