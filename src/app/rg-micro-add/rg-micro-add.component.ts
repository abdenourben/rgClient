import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RgMicro } from '../_models/rg_micro';
import { Institution } from '../_models/institution';
import { RgMTO } from '../_models/RgMTO';
import { Taxonomie } from '../_models/taxonomie';
import { InstitutionService } from '../_services/institution.service';
import { Router } from '@angular/router';
import { RgMicroService } from '../_services/rg-micro.service';

@Component({
  selector: 'app-rg-micro-add',
  templateUrl: './rg-micro-add.component.html',
  styleUrls: ['./rg-micro-add.component.scss']
})
export class RgMicroAddComponent implements OnInit {

  newRgMicro: RgMicro; 
  institutions: Institution[];
  newInstitution: Institution;  
  rInstitution: Institution;  
  rgMTO: RgMTO; 
  addRgMicroForm: FormGroup; 
  taxonomie: Taxonomie; 

  constructor(
    private rgMicroService: RgMicroService,
    private institutionService: InstitutionService, 
    private formBuilder: FormBuilder, 
    private router: Router, 
  ) { }

  ngOnInit() {
    this.addRgMicroForm = this.formBuilder.group({
      nomCommunFr: ['', Validators.required],
      nomCommunAr: ['', Validators.required],  
      nomScientifique: ['', Validators.required],
      description: ['', Validators.required],
      morphologie: ['', Validators.required],
      formuleChimique: ['', Validators.required], 
      environnement: ['', Validators.required], 
      cycleVie: ['', Validators.required], 
      etatRisque: ['', Validators.required], 
      institution: ['', Validators.required],
      taxonomie: ['', Validators.required],
      espece: ['', Validators.required],
      genre: ['', Validators.required],
      famille: ['', Validators.required],
      ordre: ['', Validators.required],
      classe: ['', Validators.required],
      transmission: ['', Validators.required],
      structure: ['', Validators.required],
      symptome: ['', Validators.required],
    }); 
    this.getInsitutions(); 
  }

  onSubmit() {

    this.newRgMicro = new RgMicro(
      this.addRgMicroForm.get("nomCommunFr").value, 
      this.addRgMicroForm.get("nomCommunAr").value,
      this.addRgMicroForm.get("nomScientifique").value,
      this.addRgMicroForm.get("description").value,
      this.addRgMicroForm.get("morphologie").value,
      this.addRgMicroForm.get("formuleChimique").value,
      this.addRgMicroForm.get("environnement").value,
      this.addRgMicroForm.get("cycleVie").value,
      this.addRgMicroForm.get("etatRisque").value,
      this.addRgMicroForm.get("transmission").value,
      this.addRgMicroForm.get("structure").value,
      this.addRgMicroForm.get("symptome").value,
      ); 

    this.taxonomie = new Taxonomie(
      this.addRgMicroForm.get("espece").value, 
      this.addRgMicroForm.get("genre").value, 
      this.addRgMicroForm.get("famille").value,
      this.addRgMicroForm.get("ordre").value,
      this.addRgMicroForm.get("classe").value,
      ); 

    this.rInstitution = new Institution(
      this.newInstitution.id,
      this.newInstitution.nom,
      this.newInstitution.raisonSociale,
      this.newInstitution.statutJuridique,
      this.newInstitution.natureEtabelissement,
      this.newInstitution.categorie, 
      this.newInstitution.dateCreation, 
      this.newInstitution.secteurActivite, 
      this.newInstitution.siteWeb, 
      this.newInstitution.email, 
      this.newInstitution.telFixe, 
      this.newInstitution.telPortable,
      this.newInstitution.fax, 
      this.newInstitution.typeImplicationApa, 
      this.newInstitution.anneeImplicationApa,
      this.newInstitution.infoAdditionnelles,
    );

    this.rgMTO = new RgMTO(this.newRgMicro, this.rInstitution, this.taxonomie); 

    this.rgMicroService.AddRgMicro(this.rgMTO) 
    .subscribe(
      data => {
        this.router.navigate(['/rg/micro'])
      }
    ); 

    //this.RgMicroService.AddRgMicro(this.rgITO) 
    //.subscribe(
     // data => {
       // this.router.navigate(['/rg/marine'])
      //}
    //); 

  }

  getInsitutions() {
    this.institutionService.getAll()
    .subscribe(
      institutions => this.institutions = institutions
    );
  }

  getInsitution(id: number): void {
    //const id = this.addRgMarineForm.get('institution').value; 
    this.institutionService.getDetailInstitution(id).
    subscribe(
      newInstitution => this.newInstitution = newInstitution
    );
  }

}
