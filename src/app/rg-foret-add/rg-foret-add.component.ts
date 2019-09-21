import { Component, OnInit } from '@angular/core';
import { RgForet } from '../_models/rg_foret';
import { Institution } from '../_models/institution';
import { Taxonomie } from '../_models/taxonomie';
import { RgFIT } from '../_models/RgFIT';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RgForetService } from '../_services/rg-foret.service';
import { InstitutionService } from '../_services/institution.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rg-foret-add',
  templateUrl: './rg-foret-add.component.html',
  styleUrls: ['./rg-foret-add.component.scss']
})
export class RgForetAddComponent implements OnInit {

  newRgForet: RgForet; 
  institutions: Institution[]; 
  newInstitution: Institution;  
  rInstitution: Institution;  
  rgFIT: RgFIT; 
  addRgForetForm: FormGroup; 
  taxonomie: Taxonomie; 

  constructor(
    private rgForetService: RgForetService, 
    private institutionService: InstitutionService, 
    private formBuilder: FormBuilder,
    private router: Router,

  ) { }

  ngOnInit() {
    this.addRgForetForm = this.formBuilder.group({
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
    }); 
    this.getInsitutions(); 
  }

  onSubmit() {
    this.newRgForet = new RgForet(
      this.addRgForetForm.get("nomCommunFr").value, 
      this.addRgForetForm.get("nomCommunAr").value,
      this.addRgForetForm.get("nomScientifique").value,
      this.addRgForetForm.get("description").value,
      this.addRgForetForm.get("morphologie").value,
      this.addRgForetForm.get("formuleChimique").value,
      this.addRgForetForm.get("environnement").value,
      this.addRgForetForm.get("cycleVie").value,
      this.addRgForetForm.get("etatRisque").value,
      ); 

    this.taxonomie = new Taxonomie(
      this.addRgForetForm.get("espece").value, 
      this.addRgForetForm.get("genre").value, 
      this.addRgForetForm.get("famille").value,
      this.addRgForetForm.get("ordre").value,
      this.addRgForetForm.get("classe").value,
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

    this.rgFIT = new RgFIT(this.newRgForet, this.rInstitution, this.taxonomie); 

    this.rgForetService.AddRgMarine(this.rgFIT) 
    .subscribe(
      data => {
        this.router.navigate(['/rg/foret'])
      }
    ); 
  }

  getInsitutions() {
    this.institutionService.getAll()
    .subscribe(
      institutions => this.institutions = institutions
    );
  }

  getInsitution(id: number): void {
    this.institutionService.getDetailInstitution(id).
    subscribe(
      newInstitution => this.newInstitution = newInstitution
    );
  }

}
