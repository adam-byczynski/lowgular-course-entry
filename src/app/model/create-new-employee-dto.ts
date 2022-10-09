import {InjectionToken} from '@angular/core'
import { Observable } from "rxjs";
import {EmployeeDto} from "./employee-dto";

export interface CreateNewEmployeeDto {
  createNewEmployee(employee: EmployeeDto): Observable<void>;
}

export const CREATE_NEW_EMPLOYEE_DTO = new InjectionToken<CreateNewEmployeeDto>(
  'CREATE_NEW_EMPLOYEE_DTO'
);
