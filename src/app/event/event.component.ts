import { Component, OnInit } from '@angular/core';
import {Activite} from '../_models/activite';
import {ActiviteService} from '../_services/activite.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  activites: Activite[];
  constructor(
      private activiteService: ActiviteService,

  ) { }

  ngOnInit() {

    //this.activiteService.getAllEvent.subscribe(annee :string);
    }
    getEvent(annee: string): void {
    this.activiteService.getAllEvent(annee).subscribe(
            activites => this.activites = activites
        );
  }
}
