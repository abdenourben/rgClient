import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { RgMarine } from '../_models/rg_marine'; 
import { environment } from 'src/environments/environment'; 
import { RgTaxonomieObject } from '../_models/RgTaxonomieObject';
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

  AddRgMarine(rgITO: RgTaxonomieObject) {
    return this.http.post<RgTaxonomieObject>(`${environment.apiUrl}/rg/marine`, rgITO); 
  }

}
