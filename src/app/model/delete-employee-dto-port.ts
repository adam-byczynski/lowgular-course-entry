import {InjectionToken} from '@angular/core'
import { Observable } from "rxjs";
import {EmployeeDto} from "./employee-dto";

export interface DeleteEmployeeDtoPort {
  deleteEmployee(employee: EmployeeDto): Observable<void>;
}

export const DELETE_EMPLOYEE_DTO = new InjectionToken<DeleteEmployeeDtoPort>(
  'DELETE_EMPLOYEE_DTO'
);
