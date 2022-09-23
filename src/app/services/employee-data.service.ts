import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {EmployeeDataModel} from "../model/employee-data.model";
import {ApiResponse} from "./api.response";
import {EmployeeResponse} from "./employee.response";

@Injectable()
export class EmployeeDataService {
  constructor(private _httpClient: HttpClient){
  }

  getEmployeesData(): Observable<EmployeeDataModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>> (
      'https://dummy.restapiexample.com/api/v1/employees',
      ).pipe(
        map((response: ApiResponse<EmployeeResponse[]>): EmployeeDataModel[] => {
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

  createNewEmployee(employee: EmployeeDataModel): Observable<any>{
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee)
  }

  deleteEmployee(employee: EmployeeDataModel): Observable<any> {
    return this._httpClient.delete(`https://dummy.restapiexample.com/api/v1/delete/${employee.id}`).pipe(map(_ => void 0));
  }
  //
  // }


}
