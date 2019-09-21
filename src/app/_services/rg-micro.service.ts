import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RgMicro } from '../_models/rg_micro';
import { environment } from 'src/environments/environment';
import { RgMTO } from '../_models/RgMTO';

@Injectable({
  providedIn: 'root'
})
export class RgMicroService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<RgMicro[]>(`${environment.apiUrl}/rg-micro`)
  }

  getDetailRgMicro(id: number) {
    return this.http.get<RgMicro>(`${environment.apiUrl}/rg-micro/${id}`)
  }

  AddRgMicro(rgMto: RgMTO) {
    return this.http.post<RgMTO>(`${environment.apiUrl}/rg/micro-multi`, rgMto); 
  }

}
