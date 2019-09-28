import { Component, OnInit } from '@angular/core';
import { RgMarineService } from '../_services/rg-marine.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RgMarine } from '../_models/rg_marine';
import { Router } from '@angular/router';
import { Institution } from '../_models/institution';
import { InstitutionService } from '../_services/institution.service';
import { RgTaxonomieObject } from '../_models/RgTaxonomieObject';
import { Taxonomie } from '../_models/taxonomie';
import { RgITO } from '../_models/RgITO';


@Component({
  selector: 'app-rg-marine-add',
  templateUrl: './rg-marine-add.component.html',
  styleUrls: ['./rg-marine-add.component.scss']
})
export class RgMarineAddComponent implements OnInit {

  newRgMarine: RgMarine;   
  rgTaxonomieObject: RgTaxonomieObject;
  addRgMarineForm: FormGroup; 
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
      environnement: ['', Validators.required], 
      cycleVie: ['', Validators.required], 
      etatRisque: ['', Validators.required], 
      transmission: ['', Validators.required], 
      //institution: ['', Validators.required],
      taxonomie: ['', Validators.required],
      espece: ['', Validators.required],
      genre: ['', Validators.required],
      famille: ['', Validators.required],
      ordre: ['', Validators.required],
      classe: ['', Validators.required],
    }); 
  }

  onSubmit() {

    this.newRgMarine = new RgMarine(
      this.addRgMarineForm.get("nomCommunFr").value, 
      this.addRgMarineForm.get("nomCommunAr").value,
      this.addRgMarineForm.get("nomScientifique").value,
      this.addRgMarineForm.get("description").value,
      this.addRgMarineForm.get("morphologie").value,
      this.addRgMarineForm.get("formuleChimique").value,
      this.addRgMarineForm.get("environnement").value,
      this.addRgMarineForm.get("cycleVie").value,
      this.addRgMarineForm.get("etatRisque").value,
      this.addRgMarineForm.get("transmission").value,
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

    /*this.rInstitution = new Institution(
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
    console.log(this.rInstitution);*/ 

  



   
    this.rgTaxonomieObject = new RgTaxonomieObject(this.newRgMarine, this.taxonomie); 
    //this.rgITO = new RgITO(this.newRgMarine, this.rInstitution, this.taxonomie); 
    console.log(this.rgTaxonomieObject); 


    this.rgMarineService.AddRgMarine(this.rgTaxonomieObject) 
    .subscribe(
      data => {
        this.router.navigate(['/rg/marine'])
      }
    ); 

    //this.rgMarineService.AddRgMarine(this.rgITO) 
    //.subscribe(
     // data => {
       // this.router.navigate(['/rg/marine'])
      //}
    //); 

  }

  //getInsitutions() {
    //this.institutionService.getAll()
    //.subscribe(
      //institutions => this.institutions = institutions
    //);
  //}

  //getInsitution(id: number): void {
    //const id = this.addRgMarineForm.get('institution').value; 
    //this.institutionService.getDetailInstitution(id).
    //subscribe(
      //newInstitution => this.newInstitution = newInstitution
    //);
  //}
  

}
