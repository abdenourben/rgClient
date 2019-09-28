import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Institution } from '../_models/institution';
import { InstitutionService } from '../_services/institution.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-institution-detail',
  templateUrl: './institution-detail.component.html',
  styleUrls: ['./institution-detail.component.scss']
})
export class InstitutionDetailComponent implements OnInit {

  institution: Institution;

  constructor(
      private institutionService: InstitutionService,
      private router: Router,
      private route: ActivatedRoute,
      private location: Location,
      public http: HttpClient,
  ) { }

  ngOnInit() {
    this.getInsitution();
  }

  getInsitution(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.institutionService.getDetailInstitution(id).
    subscribe(
        institution => this.institution = institution
    );
  }

  onDeleteInstitution(i: number) {
    const confirm = window.confirm('est vous sure pour supprimer ?');
    if (confirm === true) {
      this.institutionService.deleteInstitution(i)
          .subscribe((data: any) => {
            alert('delete effectuée');
            this.router.navigate(['/institution']);
          } , err => {
            console.log(err); alert('Problème !!!!!');
          } ) ;
    }
  }
  onEditInstitution(id: number) {
    this.router.navigate(['/institution/edit', id]);
  }
}
