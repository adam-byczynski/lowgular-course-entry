import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {EmployeeDto} from "../model/employee-dto";
import {ApiResponse} from "./api.response";
import {EmployeeResponse} from "./employee.response";
import {GetsAllEmployessDtoPort} from "../model/get-all-employees-dto-port";
import {DeleteEmployeeDtoPort} from "../model/delete-employee-dto-port";
import {CreateNewEmployeeDto} from "../model/create-new-employee-dto";

@Injectable()
export class EmployeeDataService implements
  GetsAllEmployessDtoPort, DeleteEmployeeDtoPort, CreateNewEmployeeDto {
  constructor(private _httpClient: HttpClient){
  }

  getEmployeesData(): Observable<EmployeeDto[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>> (
      'https://dummy.restapiexample.com/api/v1/employees',
      ).pipe(
        map((response: ApiResponse<EmployeeResponse[]>): EmployeeDto[] => {
          return response.data.map((employeeResponse: EmployeeResponse) => {
            return {
              id: employeeResponse.id,
              name: employeeResponse.employee_name,
              salary: employeeResponse.employee_salary,
              age: employeeResponse.employee_age,
            }
            });
        }
    ))
  }

  createNewEmployee(employee: EmployeeDto): Observable<any>{
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee)
  }

  deleteEmployee(employee: EmployeeDto): Observable<any> {
    return this._httpClient.delete(`https://dummy.restapiexample.com/api/v1/delete/${employee.id}`).pipe(map(_ => void 0));
  }


}
