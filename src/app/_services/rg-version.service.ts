import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { rg_version } from '../_models/rg_version';

@Injectable({
  providedIn: 'root'
})
export class RgVersionService {

  constructor() { }
 /* getAll() {
    return this.http.get<Rg[]>(`${environment.apiUrl}/rg`);
  }*/

}







