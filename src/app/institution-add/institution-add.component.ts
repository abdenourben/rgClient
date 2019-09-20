import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { InstitutionService } from '../_services/institution.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institution-add',
  templateUrl: './institution-add.component.html',
  styleUrls: ['./institution-add.component.scss']
})
export class InstitutionAddComponent implements OnInit {

  addForm: FormGroup;

  constructor(
    private institutionService: InstitutionService,
    private formBuilder: FormBuilder, 
    private router: Router,
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      nom: ['', Validators.required], 
      raisonSociale: ['', Validators.required], 
      statutJuridique: ['', Validators.required], 
      natureEtabelissement: ['', Validators.required], 
      categorie: ['', Validators.required],
      dateCreation: ['', Validators.required], 
      secteurActivite: ['', Validators.required], 
      siteWeb: ['', Validators.required], 
      email: ['', Validators.required],
      telFixe: ['', Validators.required],
      telPortable: ['', Validators.required],
      fax: ['', Validators.required],
      typeImplicationApa: ['', Validators.required],
      anneeImplicationApa: ['', Validators.required],
      infoAdditionnelles: ['', Validators.required],
    });
  }

  onSubmit() {
    this.institutionService.addInstitution(this.addForm.value)
    .subscribe(
      data => {
        this.router.navigate(['/institution'])
      }
    );
    }
}
