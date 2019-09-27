import { Component, OnInit } from '@angular/core';
import { RgAlimentaire } from '../_models/rg_alimentaire';
import { Institution } from '../_models/institution';
import { RgAO } from '../_models/rgAO';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Taxonomie } from '../_models/taxonomie';
import { RgAlimentaireService } from '../_services/rg-alimentaire.service';
import { InstitutionService } from '../_services/institution.service';
import { Router } from '@angular/router';
import { RgAlimentaireTaxonomie } from '../_models/RgAlimentaireTaxonomie';

@Component({
  selector: 'app-rg-aliemntaire-add',
  templateUrl: './rg-aliemntaire-add.component.html',
  styleUrls: ['./rg-aliemntaire-add.component.scss']
})
export class RgAliemntaireAddComponent implements OnInit {

  newRgAlimentaire: RgAlimentaire; 
  rgAlimentaireTaxonomie: RgAlimentaireTaxonomie; 
  addRgAlimentaireForm: FormGroup;
  taxonomie: Taxonomie; 



  constructor(
    private rgAlimentaireService: RgAlimentaireService, 
    private institutionService: InstitutionService, 
    private formBuilder: FormBuilder, 
    private router: Router, 
  ) { }

  ngOnInit() {
    this.addRgAlimentaireForm = this.formBuilder.group({
      nomCommunFr: ['', Validators.required],
      nomCommunAr: ['', Validators.required],  
      nomScientifique: ['', Validators.required],
      description: ['', Validators.required],
      morphologie: ['', Validators.required],
      formuleChimique: ['', Validators.required], 
      environnement: ['', Validators.required], 
      cycleVie: ['', Validators.required], 
      etatRisque: ['', Validators.required], 
      taxonomie: ['', Validators.required],
      espece: ['', Validators.required],
      genre: ['', Validators.required],
      famille: ['', Validators.required],
      ordre: ['', Validators.required],
      classe: ['', Validators.required],
      exploitation: ['', Validators.required],
      zone: ['', Validators.required],
    }); 
  }

  onSubmit() {

    this.newRgAlimentaire = new RgAlimentaire(
      this.addRgAlimentaireForm.get("nomCommunFr").value, 
      this.addRgAlimentaireForm.get("nomCommunAr").value,
      this.addRgAlimentaireForm.get("nomScientifique").value,
      this.addRgAlimentaireForm.get("description").value,
      this.addRgAlimentaireForm.get("morphologie").value,
      this.addRgAlimentaireForm.get("formuleChimique").value,
      this.addRgAlimentaireForm.get("environnement").value,
      this.addRgAlimentaireForm.get("cycleVie").value,
      this.addRgAlimentaireForm.get("etatRisque").value,
      this.addRgAlimentaireForm.get("zone").value,
      this.addRgAlimentaireForm.get("exploitation").value,
      ); 

    this.taxonomie = new Taxonomie(
      this.addRgAlimentaireForm.get("espece").value, 
      this.addRgAlimentaireForm.get("genre").value, 
      this.addRgAlimentaireForm.get("famille").value,
      this.addRgAlimentaireForm.get("ordre").value,
      this.addRgAlimentaireForm.get("classe").value,
      ); 

  

    this.rgAlimentaireTaxonomie = new RgAlimentaireTaxonomie(this.newRgAlimentaire, this.taxonomie); 

    this.rgAlimentaireService.AddRgAlimentaire(this.rgAlimentaireTaxonomie) 
    .subscribe(
      data => {
        this.router.navigate(['/rg/alimentaire'])
      }
    ); 

    //this.RgAlimentaireService.AddRgAlimentaire(this.rgITO) 
    //.subscribe(
     // data => {
       // this.router.navigate(['/rg/marine'])
      //}
    //); 

  }

}
