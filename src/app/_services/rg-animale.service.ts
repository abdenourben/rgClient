import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RgAnimale } from '../_models/rg_animale';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RgAnimaleService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<RgAnimale[]>(`${environment.apiUrl}/rg-animale`)
  }

  getDetailRgAnimale(id: number) {
    return this.http.get<RgAnimale>(`${environment.apiUrl}/rg-animale/${id}`)
  }

}
