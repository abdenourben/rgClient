import { Component, OnInit } from '@angular/core';
import { Institution } from '../_models/institution';
import { InstitutionService } from '../_services/institution.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.scss']
})
export class InstitutionComponent implements OnInit {
  motCle = '';
  institutions: Institution[];

  constructor(
      private institutionService: InstitutionService,
      public router: Router,
  ) { }

  ngOnInit() {
    this.getInsitutions();
  }

  getInsitutions(): void {
    this.institutionService.getAll().subscribe(
        institutions => this.institutions = institutions
    );
  }
  getNom(mc: string): void {
    this.institutionService.getNom(mc).subscribe(
        institutions => this.institutions = institutions
    );
  }
  chercher() {
    this.getNom(this.motCle);
    this.ngOnInit();
  }

  onDeleteInstitution(i: number) {
    const confirm = window.confirm('est vous sure pour supprimer ?');
    if (confirm === true) {
      this.institutionService.deleteInstitution(i)
          .subscribe((data: any) => {
            alert('delete effectuée');
            this.ngOnInit();
          } , err => {
            console.log(err); alert('Problème !!!!!');
          } ) ;
    }
  }

  /* recherche par critere */
  getRaison(mc: string): void {
    this.institutionService.getRaison(mc).subscribe(
        institutions => this.institutions = institutions
    );
  }
  chercherRaison() {
    this.getRaison(this.motCle);
    this.ngOnInit();
  }

  getStatut(mc: string): void {
    this.institutionService.getStatut(mc).subscribe(
        institutions => this.institutions = institutions
    );
  }
  chercherStatut() {
    this.getStatut(this.motCle);
    this.ngOnInit();
  }

  getCategorie(mc: string): void {
    this.institutionService.getCategorie(mc).subscribe(
        institutions => this.institutions = institutions
    );
  }
  chercherCategorie() {
    this.getCategorie(this.motCle);
    this.ngOnInit();
  }

  getSecteur(mc: string): void {
    this.institutionService.getSecteur(mc).subscribe(
        institutions => this.institutions = institutions
    );
  }
  chercherSecteur() {
    this.getSecteur(this.motCle);
    this.ngOnInit();
  }

  getTypeImplication(mc: string): void {
    this.institutionService.getTypeImplication(mc).subscribe(
        institutions => this.institutions = institutions
    );
  }
  chercherTypeImplucation() {
    this.getTypeImplication(this.motCle);
    this.ngOnInit();
  }

  getType(mc: string): void {
    this.institutionService.getType(mc).subscribe(
        institutions => this.institutions = institutions
    );
  }
  chercherType() {
    this.getType(this.motCle);
    this.ngOnInit();
  }

}
