import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {ProjectsModel} from "../../model/projects.model";
import {ProjectsService} from "../../services/projects.service";


@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsListComponent {
  constructor(private _projectsService: ProjectsService) {}
  data$: Observable<ProjectsModel[] | null> = this._projectsService.getAll()
}
