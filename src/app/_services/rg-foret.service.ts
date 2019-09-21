import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RgForet } from '../_models/rg_foret';
import { environment } from 'src/environments/environment';
import { RgFIT } from '../_models/RgFIT';

@Injectable({
  providedIn: 'root'
})
export class RgForetService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<RgForet[]>(`${environment.apiUrl}/rg-foret`)
  }

  getDetailRgForet(id: number) {
    return this.http.get<RgForet>(`${environment.apiUrl}/rg-foret/${id}`)
  }

  AddRgMarine(rgFIT: RgFIT) {
    return this.http.post<RgFIT>(`${environment.apiUrl}/rg/foret-multi`, rgFIT); 
  }

}
