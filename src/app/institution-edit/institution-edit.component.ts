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

  institution: Institution; 
  institutionss: Institution[]; 
  modifyForm: FormGroup; 

  constructor(
    private institutionService: InstitutionService,
    private route: ActivatedRoute,  
    private formBuilder: FormBuilder, 

  ) { }

  ngOnInit() {
    this.getDetailInstitution(); 
    this.modifyForm = this.formBuilder.group({
      nom: ['', Validators.required], 
      raisonSociale: ['', Validators.required], 
      statutJuridique: ['', Validators.required], 
      natureEtabelissement: ['', Validators.required], 
      categorie: ['', Validators.required]
    });
  }

  getDetailInstitution(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.institutionService.getDetailInstitution(id).subscribe(
      institution => this.institution = institution
    );
  }

  getInstitutions(): void {
    this.institutionService.getAll().subscribe(
      institutionss => this.institutionss = institutionss
    );
  }

  onSubmit(){

  }

}
