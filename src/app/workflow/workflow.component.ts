import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import Workflow from './workflow.model'
import WorkflowService from './workflow.service'

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {
  constructor(
    private workflowService: WorkflowService,
    private route: ActivatedRoute
  ) {}
  @Input()
  workflow: Workflow = new Workflow('', new Date(), 'Brouillon', '', {})
  @Input()
  create = false
  @Output()
  finish = new EventEmitter<Workflow>()

  private loading = false
  ngOnInit() {
    if (!this.create) {
      this.loading = true
      this.route.params.subscribe(({ workflowId }) => {
        this.workflowService
          .fetchWorkFlowById(workflowId)
          .subscribe(workflow => {
            this.loading = false
            this.workflow = workflow
          })
      })
    }
  }
  sauvegarderBrouillon = () => {
    this.loading = true
    this.workflowService.sauvegarderBrouillon(this.workflow).subscribe(x => {
      window.location.reload()
    })
  }
  mettreEnAttente = () => {
    this.loading = true
    this.workflowService.mettreEnAttente(this.workflow).subscribe(x => {
      this.workflow.status = 'En Attente'
      this.loading = false
      // window.location.reload()
    })
  }
  autoriser = () => {
    this.loading = true
    this.workflowService.autoriser(this.workflow).subscribe(x => {
      this.workflow.status = 'Traitee'
      this.loading = false
      // window.location.reload()
    })
  }
  reject = () => {
    this.loading = true
    this.workflowService.reject(this.workflow).subscribe(x => {
      this.workflow.status = 'Traitee'
      this.loading = false
      window.location.reload()
    })
  }
  sendMail = () => {
    this.loading = true
    this.workflowService.sendMail(this.workflow).subscribe(x => {
      this.loading = false
      // window.location.reload()
    })
  }
  cancelDemand = () => {
    this.loading = true
    this.workflowService.cancelDemand(this.workflow).subscribe(x => {
      this.loading = false
      // window.location.reload()
    })
  }
  cancel = () => {
    this.finish.emit(null)
  }
}
