import {ChangeDetectionStrategy, Component, Inject, ViewEncapsulation} from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeDto} from "../../model/employee-dto";
import {GETS_ALL_EMPLOYEES_DTO, GetsAllEmployessDtoPort} from "../../model/get-all-employees-dto-port";
import {DELETE_EMPLOYEE_DTO, DeleteEmployeeDtoPort} from "../../model/delete-employee-dto-port";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  constructor(
    @Inject(GETS_ALL_EMPLOYEES_DTO) private _getsAllEmployeesDTO: GetsAllEmployessDtoPort,
    @Inject(DELETE_EMPLOYEE_DTO) private _deleteEmployeeDto: DeleteEmployeeDtoPort
  ) {}

  data$: Observable<EmployeeDto[] | null> = this._getsAllEmployeesDTO.getEmployeesData();

  delete_employee(employee: EmployeeDto) {
    this._deleteEmployeeDto.deleteEmployee(employee).subscribe(_ => this.deleteButtonClicked(employee));
  }

  deleteButtonClicked(employee: EmployeeDto) {
    alert(`User ${employee.id}: ${employee.name} has been removed from list!`)
  }
//  jak narazie alert wyskakuje od razu, nawet jak request do api failed
}


