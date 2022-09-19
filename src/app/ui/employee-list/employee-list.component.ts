import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import {EmployeeService} from "../../services/employee.service";
import {PersonModel} from "../../model/person.model";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) {
  }
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();

  delete_employee(id: string) {
    this._employeeService.delete(id).subscribe(_ => this.onDeleteButtonClicked(id));
  }

  onDeleteButtonClicked(user_id: string) {
    alert(`User ${user_id } was successfully removed!`);
  }
}

