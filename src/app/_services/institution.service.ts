import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Institution } from '../_models/institution'; 
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  constructor(
    private http: HttpClient, 
  ) { }

  getAll() {
    return this.http.get<Institution[]>(`${environment.apiUrl}/institutions`);
  }

  getDetailInstitution(id: number) {
    return this.http.get<Institution>(`${environment.apiUrl}/institutions/${id}`); 
  }

  addInstitution(institution: Institution) {
    return this.http.post<Institution>(`${environment.apiUrl}/institutions`, institution); 
  }

}
