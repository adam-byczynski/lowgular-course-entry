import {InjectionToken} from '@angular/core'
import { Observable } from "rxjs";
import {EmployeeDto} from "./employee-dto";

export interface GetsAllEmployessDtoPort {
  getEmployeesData(): Observable<EmployeeDto[]>;
}

export const GETS_ALL_EMPLOYEES_DTO = new InjectionToken<GetsAllEmployessDtoPort>(
  'GETS_ALL_EMPLOYEES_DTO'
);
