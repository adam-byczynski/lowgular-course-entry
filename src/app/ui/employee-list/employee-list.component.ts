import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeDataModel} from "../../model/employee-data.model";
import {EmployeeDataService} from "../../services/employee-data.service";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  constructor(private _employeeDataService: EmployeeDataService) {
  }
  data$: Observable<EmployeeDataModel[] | null> = this._employeeDataService.getEmployeesData();

  delete_employee(employee: EmployeeDataModel) {
    this._employeeDataService.deleteEmployee(employee).subscribe(_ => this.deleteButtonClicked(employee));
  }

  deleteButtonClicked(employee: EmployeeDataModel) {
    alert(`User ${employee.id}: ${employee.name} has been removed from list!`)
  }
}


