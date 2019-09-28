import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { RgMarine } from '../_models/rg_marine'; 
import { environment } from 'src/environments/environment'; 
import { RgInstitutionObject } from '../_models/RgInstitutionObject';

@Injectable({
  providedIn: 'root'
})
export class RgMarineService {

  constructor(
    private http: HttpClient,  
  ) { }

  getAll() {
    return this.http.get<RgMarine[]>(`${environment.apiUrl}/rg/marine`);
  }

  getDetailRgMarine(id: number) {
    return this.http.get<RgMarine>(`${environment.apiUrl}/rg/marine/${id}`);
  }

  AddRgMarine(rgInstitutionObject: RgInstitutionObject) {
    return this.http.post<RgInstitutionObject>(`${environment.apiUrl}/rg/marine`, rgInstitutionObject); 
  }

}
