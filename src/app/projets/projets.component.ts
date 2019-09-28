import { Component, OnInit } from '@angular/core';
import {ActiviteService} from '../_services/activite.service';
import {Activite} from '../_models/activite';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit {
  activites: Activite[];
  constructor(
      private activiteService: ActiviteService,
  ) { }

  ngOnInit() {
  }

  getProject(annee: string): void {
    this.activiteService.getAllProjects(annee).subscribe(
        activites => this.activites = activites
    );
  }
}
