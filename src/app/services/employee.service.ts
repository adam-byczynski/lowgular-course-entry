import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {EmployeeModel} from "../model/employee.model";
import {map, Observable} from "rxjs";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<EmployeeModel[]>('assets/data/people.json')
      // .pipe(map(employees => employees.map( employee => ({
      //   id: employee.id, name: employee.name, email: employee.email, image: employee.image}))))
  }
}
