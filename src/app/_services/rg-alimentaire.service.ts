import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RgAlimentaire } from '../_models/rg_alimentaire';
import { environment } from 'src/environments/environment';
import { RgAO } from '../_models/rgAO';
import { RgAlimentaireTaxonomie } from '../_models/RgAlimentaireTaxonomie';

@Injectable({
  providedIn: 'root'
})
export class RgAlimentaireService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<RgAlimentaire[]>(`${environment.apiUrl}/rg/alimentaire`)
  }

  getDetailRgAlimentaire(id: number) {
    return this.http.get<RgAlimentaire>(`${environment.apiUrl}/rg/alimentaire/${id}`); 
  }

  AddRgAlimentaire(rgAO: RgAlimentaireTaxonomie) {
    return this.http.post<RgAlimentaireTaxonomie>(`${environment.apiUrl}/rg/alimentaire`, rgAO); 
  }
}
