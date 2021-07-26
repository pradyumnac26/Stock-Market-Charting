import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExchCompService {
  

  constructor(private http : HttpClient) { }
  getexchcomplist()
  {
    return this.http.get(environment.apiBaseURL + '/Exchanges')
  }
}
