import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeService} from "../../services/employee.service";
import {PersonModel} from "../../model/person.model";

@Component({
  selector: 'app-employee-images-low-bar',
  templateUrl: './employee-images-low-bar.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeImagesLowBarComponent {
  constructor(private _employeeService: EmployeeService) {}
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();
}
