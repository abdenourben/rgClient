import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { RgMarine } from '../_models/rg_marine'; 
import { environment } from 'src/environments/environment'; 
import { RgInstitutionObject } from '../_models/RgInstitutionObject';
import { RgITO } from '../_models/RgITO';

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

  AddRgMarine(rgITO: RgITO) {
    return this.http.post<RgITO>(`${environment.apiUrl}/rg/marine-multi`, rgITO); 
  }

  AddRgMarineO(rgITO: RgInstitutionObject) {
    return this.http.post<RgInstitutionObject>(`${environment.apiUrl}/rg/marine`, rgITO); 
  }

}
