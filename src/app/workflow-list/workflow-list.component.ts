import { Component, HostBinding, OnInit } from '@angular/core'
import Workflow from '../workflow/workflow.model'
import WorkflowService from '../workflow/workflow.service'

@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html',
  styleUrls: ['./workflow-list.component.css']
})
export class WorkflowListComponent implements OnInit {
  constructor(private workflowService: WorkflowService) {}
  @HostBinding('attr.class') hostClass = 'row h-100'
  adding = false
  loading = true
  workflows: Workflow[] = []

  ngOnInit() {
    this.workflowService.fetchWorkflows().subscribe(workflows => {
      this.workflows = workflows
      this.loading = false
    })
  }

  onAddClicked = () => {
    this.adding = true
  }
  finishAdd = () => {
    this.adding = false
  }
}
