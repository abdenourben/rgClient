import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/environment'; 
import { Rg } from '../_models/rg'; 

@Injectable({
  providedIn: 'root'
})
export class RgService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Rg[]>(`${environment.apiUrl}/rg`); 
  }
  
}
