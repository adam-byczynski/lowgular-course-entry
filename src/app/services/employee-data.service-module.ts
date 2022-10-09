import { NgModule } from '@angular/core';
import { EmployeeDataService } from './employee-data.service';
import {GETS_ALL_EMPLOYEES_DTO} from "../model/get-all-employees-dto-port";
import {DELETE_EMPLOYEE_DTO} from "../model/delete-employee-dto-port";
import {CREATE_NEW_EMPLOYEE_DTO} from "../model/create-new-employee-dto";

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    EmployeeDataService,
    { provide: GETS_ALL_EMPLOYEES_DTO, useExisting: EmployeeDataService },
    { provide: DELETE_EMPLOYEE_DTO, useExisting: EmployeeDataService},
    { provide: CREATE_NEW_EMPLOYEE_DTO, useExisting: EmployeeDataService}
  ],
  exports: [],
})
export class EmployeeDataServiceModule {
}
