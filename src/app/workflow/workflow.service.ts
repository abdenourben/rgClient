import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { delay } from 'rxjs/operators'
import Workflow from './workflow.model'

const workflows = [
  new Workflow('15', new Date(), 'En Attente', 'type', {
    organisation: 'Esi',
    ville: 'Alger',
    pays: 'Algerie'
  }),
  new Workflow('15', new Date(), 'Brouillon', 'type', {
    organisation: 'Esi',
    ville: 'Alger',
    pays: 'Algerie'
  }),
  new Workflow('15', new Date(), 'Traitee', 'type', {
    organisation: 'Esi',
    ville: 'Alger',
    pays: 'Algerie'
  }),
  new Workflow('15', new Date(), 'En Attente', 'type', {
    organisation: 'Esi',
    ville: 'Alger',
    pays: 'Algerie'
  }),
  new Workflow('15', new Date(), 'En Attente', 'type', {
    organisation: 'Esi',
    ville: 'Alger',
    pays: 'Algerie'
  })
]

interface WorkFlowResponse {
  error?: boolean
  success?: boolean
  message: string
}
@Injectable({
  providedIn: 'root'
})
export default class WorkflowService {
  sendMail: (workflow: Workflow) => Observable<WorkFlowResponse>
  cancelDemand: (workflow: Workflow) => Observable<WorkFlowResponse>
  mettreEnAttente: (workflow: Workflow) => Observable<WorkFlowResponse>
  autoriser: (workflow: Workflow) => Observable<WorkFlowResponse>
  reject: (workflow: Workflow) => Observable<WorkFlowResponse>
  sauvegarderBrouillon: (workflow: Workflow) => Observable<WorkFlowResponse>
  private observe = (workflow: Workflow) =>
    of({ success: true, message: 'Success ' }).pipe(delay(3000))

  constructor(private httpClient: HttpClient) {
    this.sendMail = this.observe
    this.cancelDemand = this.observe
    this.mettreEnAttente = this.observe
    this.autoriser = this.observe
    this.reject = this.observe
    this.sauvegarderBrouillon = this.observe
  }
  fetchWorkflows = () => of(workflows).pipe(delay(1000))
  fetchWorkFlowById = id =>
    of(
      new Workflow('12', new Date(), 'Brouillon', '1', {
        organisation: 'Esi',
        email: 'email@esi.dz',
        ville: 'Alger',
        pays: 'Algerie'
      })
    ).pipe(delay(1000))
}
