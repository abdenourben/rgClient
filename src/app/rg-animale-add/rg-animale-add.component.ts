import { Component, OnInit } from '@angular/core';
import { RgAnimale } from '../_models/rg_animale';
import { Institution } from '../_models/institution';
import { RgAIT } from '../_models/rgAIT';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Taxonomie } from '../_models/taxonomie';
import { Router } from '@angular/router';
import { InstitutionService } from '../_services/institution.service';
import { RgAnimaleService } from '../_services/rg-animale.service';

@Component({
  selector: 'app-rg-animale-add',
  templateUrl: './rg-animale-add.component.html',
  styleUrls: ['./rg-animale-add.component.scss']
})
export class RgAnimaleAddComponent implements OnInit {

  newRgAnimale: RgAnimale;  
  institutions: Institution[]; 
  newInstitution: Institution;  
  rInstitution: Institution;  
  rgAIT: RgAIT; 
  addRgAnimaleForm: FormGroup; 
  taxonomie: Taxonomie; 

  constructor(
    private RgAnimaleService: RgAnimaleService, 
    private institutionService: InstitutionService,
    private formBuilder: FormBuilder, 
    private router: Router, 
  ) { }

  ngOnInit() {
    this.addRgAnimaleForm = this.formBuilder.group({
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
      production: ['', Validators.required],
      elevage: ['', Validators.required],
      systemeProd: ['', Validators.required],
      conservation: ['', Validators.required],
    }); 
    this.getInsitutions(); 
  }

  onSubmit() {

    this.newRgAnimale = new RgAnimale(
      this.addRgAnimaleForm.get("nomCommunFr").value, 
      this.addRgAnimaleForm.get("nomCommunAr").value,
      this.addRgAnimaleForm.get("nomScientifique").value,
      this.addRgAnimaleForm.get("description").value,
      this.addRgAnimaleForm.get("morphologie").value,
      this.addRgAnimaleForm.get("formuleChimique").value,
      this.addRgAnimaleForm.get("environnement").value,
      this.addRgAnimaleForm.get("cycleVie").value,
      this.addRgAnimaleForm.get("etatRisque").value,
      this.addRgAnimaleForm.get("production").value,
      this.addRgAnimaleForm.get("elevage").value,
      this.addRgAnimaleForm.get("systemeProd").value,
      this.addRgAnimaleForm.get("conservation").value,



      ); 

    this.taxonomie = new Taxonomie(
      this.addRgAnimaleForm.get("espece").value, 
      this.addRgAnimaleForm.get("genre").value, 
      this.addRgAnimaleForm.get("famille").value,
      this.addRgAnimaleForm.get("ordre").value,
      this.addRgAnimaleForm.get("classe").value,
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

    this.rgAIT = new RgAIT(this.newRgAnimale, this.rInstitution, this.taxonomie); 


    this.RgAnimaleService.AddRgAnimale(this.rgAIT) 
    .subscribe(
      data => {
        this.router.navigate(['/rg/animale'])
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
    //const id = this.addRgMarineForm.get('institution').value; 
    this.institutionService.getDetailInstitution(id).
    subscribe(
      newInstitution => this.newInstitution = newInstitution
    );
  }

}
