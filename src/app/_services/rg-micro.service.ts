import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RgMicro } from '../_models/rg_micro';
import { environment } from 'src/environments/environment';
import { RgMTO } from '../_models/RgMTO';
import { RgMicroTaxonomie } from '../_models/RgMicroTaxonomie';

@Injectable({
  providedIn: 'root'
})
export class RgMicroService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<RgMicro[]>(`${environment.apiUrl}/rg/micro`)
  }

  getDetailRgMicro(id: number) {
    return this.http.get<RgMicro>(`${environment.apiUrl}/rg/micro/${id}`)
  }

  AddRgMicro(rgMto: RgMicroTaxonomie) {
    return this.http.post<RgMicroTaxonomie>(`${environment.apiUrl}/rg/micro`, rgMto); 
  }

}
