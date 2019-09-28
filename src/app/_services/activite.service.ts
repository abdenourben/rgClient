import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Activite } from '../_models/activite';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  constructor(
      private http: HttpClient,
  ) {}
  getAll(){
    return this.http.get<Activite[]> (`${environment.apiUrl}/activites`);
  }

     getDetailActivite(id: number) {
       return this.http.get<Activite>(`${environment.apiUrl}/activites/${id}`);
     }

        addActivite(activite: Activite) {
          return this.http.post<Activite>(`${environment.apiUrl}/activites`, activite);
        }

        deleteActivite(id: number){
          return this.http.delete<Activite>(`${environment.apiUrl}/activites/${id}`)
        }

    updateActivite(id: number,activite: Activite) {
        return this.http.put<Activite>(`${environment.apiUrl}/activites/${id}`, activite);
    }

           getAllEvent(annee:string ) {
             return this.http.get<Activite[]>(`${environment.apiUrl}/getAllEvents/${annee}`);
           }

           getAllProjects(annee:string ) {
        return this.http.get<Activite[]>(`${environment.apiUrl}/getAllProjects/${annee}`);
    }
           /*


  getActiviteWithDomaine(){
    return this.http.get<Activite>(`${environment.apiUrl}/chercherActiviteParDomaine?domaine=domaine)
  }

  getActiviteWithLocalisation(){
    return this.http.get<Activite>(\`${environment.apiUrl}/chercherActiviteParLocalisation?localisation=localisation)
  }*/
}
