import { Component, OnInit } from '@angular/core';
import { Activite } from '../_models/activite';
import { ActiviteService } from '../_services/activite.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from '@angular/forms'


@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit{
  activite: Activite;
  activites: Activite[];
  modifyForm: FormGroup;

  constructor(
      private activiteService: ActiviteService,
      private route: ActivatedRoute,
      private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.getDetailEvent();
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
  getDetailEvent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.activiteService.getDetailActivite(id).subscribe(
        activite => this.activite = activite
    );
  }
  updateevent(id: number,activite: Activite): void{
    this.activiteService.updateActivite(id, activite).subscribe(
        activite => this.activite = activite
    );


  }
}
