import { Component, OnInit } from '@angular/core';
import { Institution } from '../_models/institution';
import { InstitutionService } from '../_services/institution.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from '@angular/forms'

@Component({
  selector: 'app-institution-edit',
  templateUrl: './institution-edit.component.html',
  styleUrls: ['./institution-edit.component.scss']
})
export class InstitutionEditComponent implements OnInit {

  idInstitution: number;
  institution: Institution;
  modifyForm: FormGroup;

  constructor( public activatedRoute: ActivatedRoute, private institutionService: InstitutionService, private route: ActivatedRoute, private formBuilder: FormBuilder, public router: Router) {
    this.idInstitution = activatedRoute.snapshot.params.id ;
  }

  ngOnInit() {
    this.institutionService.getDetailInstitution(this.idInstitution)
        .subscribe((data: any) => {
          this.institution = data;
        } , err => {console.log(err);
        } ) ;
    this.modifyForm = this.formBuilder.group({
      nom: ['', Validators.required],
      raison: ['', Validators.required],
      statut: ['', Validators.required],
      adresse: ['', Validators.required],
      categorie: ['', Validators.required],
      creation: ['', Validators.required],
      secteur: ['', Validators.required],
      site: ['', Validators.required],
      type: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      fax: ['', Validators.required],
      typeApa: ['', Validators.required],
      anneeApa: ['', Validators.required],
      infoAdd: ['', Validators.required],
    });
  }

  update() {
    this.institutionService.updateInstitution(this.institution)
        .subscribe((data: any) => {
          console.log(data);
          alert('mis à jour effectuée');
          // this.mode = 2;
          this.router.navigate(['/institution']);
          this.ngOnInit();
        } , err => {
          console.log(err); alert('Problème !!!!!');
        } ) ;
  }
  onSubmit() {
    this.institutionService.updateInstitution(this.modifyForm.value)
        .subscribe(
            data => {
              this.router.navigate(['/institution'])
            }
        );
  }

}
