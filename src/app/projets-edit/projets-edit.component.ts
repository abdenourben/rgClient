import { Component, OnInit } from '@angular/core';
import { Activite } from '../_models/activite';
import { ActiviteService } from '../_services/activite.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from '@angular/forms'

@Component({
  selector: 'app-projets-edit',
  templateUrl: './projets-edit.component.html',
  styleUrls: ['./projets-edit.component.scss']
})
export class ProjetsEditComponent implements OnInit {
  activite: Activite;
  activites: Activite[];
  modifyForm: FormGroup;
  constructor(
      private activiteService: ActiviteService,
      private route: ActivatedRoute,
      private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.getDetailProject();
    this.modifyForm = this.formBuilder.group({
      titre: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      domaine: ['', Validators.required],
      description: ['', Validators.required],
      contenu: ['', Validators.required],
      type: ['', Validators.required],
      localisation: ['', Validators.required],
    });
  }
  getDetailProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.activiteService.getDetailActivite(id).subscribe(
        activite => this.activite = activite
    );
  }
  updateproject(id: number,activite: Activite): void{
    this.activiteService.updateActivite(id, activite).subscribe(
        activite => this.activite = activite
    );


  }
}
