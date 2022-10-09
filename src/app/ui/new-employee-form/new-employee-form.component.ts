import {ChangeDetectionStrategy, Component, Inject, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeDto} from "../../model/employee-dto";
import {CREATE_NEW_EMPLOYEE_DTO, CreateNewEmployeeDto} from "../../model/create-new-employee-dto";

@Component({
  selector: 'app-new-employee-form',
  templateUrl: './new-employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewEmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(0)]),
    salary: new FormControl(null, [Validators.required, Validators.min(0)])
  })

  constructor(@Inject(CREATE_NEW_EMPLOYEE_DTO) private _createNewEmployeeDTO: CreateNewEmployeeDto) {
  }

  onFormSubmitted(form: EmployeeDto) {
    this._createNewEmployeeDTO.createNewEmployee(form).subscribe(_ => this.onSubmitButtonClicked(form));
  }

  onSubmitButtonClicked(form: EmployeeDto) {
    alert(`User was successfully added to the database. Name: ${form.name}, Age: ${form.age}, Salary: ${form.salary}.`);
  }
  //  jak narazie alert wyskakuje od razu, nawet jak request do api failed, trzeba to zmienic tak by popup jesli request sie udał
}

