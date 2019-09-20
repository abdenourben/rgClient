import { Component, OnInit } from '@angular/core';
import { RgMarineService } from '../_services/rg-marine.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RgMarine } from '../_models/rg_marine';
import { Router } from '@angular/router';
import { Institution } from '../_models/institution';
import { InstitutionService } from '../_services/institution.service';
import { RgInstitutionObject } from '../_models/RgInstitutionObject';
import { Taxonomie } from '../_models/taxonomie';


@Component({
  selector: 'app-rg-marine-add',
  templateUrl: './rg-marine-add.component.html',
  styleUrls: ['./rg-marine-add.component.scss']
})
export class RgMarineAddComponent implements OnInit {

  newRgMarine: RgMarine;  
  institutions: Institution[]; 
  newInstitution: Institution;  
  rInstitution: Institution;  
  rgInstitutionObject: RgInstitutionObject;
  addRgMarineForm: FormGroup; 
  addInstitutionForm: FormGroup;
  taxonomie: Taxonomie; 


  constructor(
    private rgMarineService: RgMarineService, 
    private institutionService: InstitutionService,
    private formBuilder: FormBuilder, 
    private router: Router, 
  ) { }

  ngOnInit() {
    this.addRgMarineForm = this.formBuilder.group({
      nomCommunFr: ['', Validators.required],
      nomCommunAr: ['', Validators.required],  
      nomScientifique: ['', Validators.required],
      description: ['', Validators.required],
      morphologie: ['', Validators.required],
      formuleChimique: ['', Validators.required], 
      structure: ['', Validators.required],
      environnement: ['', Validators.required], 
      transmission: ['', Validators.required], 
      cycleVie: ['', Validators.required], 
      marine: ['', Validators.required], 
      institution: ['', Validators.required],
      espece: ['', Validators.required],
      genre: ['', Validators.required],
      famille: ['', Validators.required],
      ordre: ['', Validators.required],
      classe: ['', Validators.required],
    }); 
    this.getInsitutions(); 

  }

  onSubmit() {

    this.newRgMarine = new RgMarine(
      this.addRgMarineForm.get("nomCommunFr").value, 
      this.addRgMarineForm.get("nomCommunAr").value,
      this.addRgMarineForm.get("nomScientifique").value,
      this.addRgMarineForm.get("description").value,
      this.addRgMarineForm.get("morphologie").value,
      this.addRgMarineForm.get("formuleChimique").value,
      this.addRgMarineForm.get("structure").value,
      this.addRgMarineForm.get("environnement").value,
      this.addRgMarineForm.get("transmission").value,
      this.addRgMarineForm.get("cycleVie").value,
      this.addRgMarineForm.get("marine").value,
      ); 
    console.log(this.newRgMarine);

    this.taxonomie = new Taxonomie(
      this.addRgMarineForm.get("espece").value, 
      this.addRgMarineForm.get("genre").value, 
      this.addRgMarineForm.get("famille").value,
      this.addRgMarineForm.get("ordre").value,
      this.addRgMarineForm.get("classe").value,
      ); 
    console.log(this.taxonomie);

    this.rInstitution = new Institution(
      this.newInstitution.id,
      this.newInstitution.nom,
      this.newInstitution.raisonSociale,
      this.newInstitution.statutJuridique,
      this.newInstitution.natureEtabelissement,
      this.newInstitution.logoChemin, 
      this.newInstitution.categorie, 
      this.newInstitution.type, 
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
    //console.log(this.rInstitution); 

  



   
    this.rgInstitutionObject = new RgInstitutionObject(this.newRgMarine, this.rInstitution); 
    //console.log(this.rgInstitutionObject); 
    this.rgMarineService.AddRgMarine(this.rgInstitutionObject) 
    .subscribe(
      data => {
        this.router.navigate(['/rg/marine'])
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
