import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Institution } from '../_models/institution';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  constructor(
      private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get<Institution[]>(`${environment.apiUrl}/institutions`);
  }

  getDetailInstitution(id: number) {
    return this.http.get<Institution>(`${environment.apiUrl}/institutions/${id}`);
  }

  addInstitution(institution: Institution) {
    return this.http.post<Institution>(`${environment.apiUrl}/institutions`, institution);
  }

  deleteInstitution(id: number) {
    return this.http.delete('http://localhost:8080/institutions/delete/' + id);
  }

  updateInstitution(institution: Institution) {
    return this.http.put<Institution>('http://localhost:8080/institutions/edit/' + institution.id, institution);
  }

  getNom(motCle: string) {
    return this.http.get<Institution[]>('http://localhost:8080/chercherInstitutionsNom?mc=' + motCle);
  }
  getRaison(motCle: string){
    return this.http.get<Institution[]>('http://localhost:8080/chercherInstitutionRaison?mc=' + motCle);
  }
  getStatut(motCle: string){
    return this.http.get<Institution[]>('http://localhost:8080/chercherInstitutionstatut?mc=' + motCle);
  }
  getCategorie(motCle: string){
    return this.http.get<Institution[]>('http://localhost:8080/chercherInstitutionCategorie?mc=' + motCle);
  }
  getSecteur(motCle: string){
    return this.http.get<Institution[]>('http://localhost:8080/chercherInstitutionSecteur?mc=' + motCle);
  }
  getTypeImplication(motCle: string){
    return this.http.get<Institution[]>('http://localhost:8080/chercherInstitutionTypeImplication?mc=' + motCle);
  }
  getType(motCle: string){
    return this.http.get<Institution[]>('http://localhost:8080/chercherInstitutionType?mc=' + motCle);
  }
}
