import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { PaymentType } from '../enums/paymentType.enum';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public paymentTypeSalary = PaymentType.Salary;
  public paymentTypeDayRate = PaymentType.DayRate;
  public hasPrimaryLanguageError: boolean;
  public primaryLanguageValidated: boolean;
  public dateHired: Date;
  public languages = ['English', 'German', 'Spanish', 'Russian'];
  public model = new Employee('', 'Bond', true, PaymentType.DayRate, 'default', '');

  constructor() { }

  ngOnInit() {
    this.hasPrimaryLanguageError = false;
    this.primaryLanguageValidated = false;
  }

  firstNameToUpperCase(input: string): void {
    if (input.length > 0) {
      this.model.firstName = input.charAt(0).toUpperCase() + input.toLowerCase().slice(1);
    } else {
      this.model.firstName = input;
    }
  }

  validatePrimaryLanguage(control): void {
    this.hasPrimaryLanguageError = control.value === 'default' ? true : false;
    this.primaryLanguageValidated = true;
    if (this.hasPrimaryLanguageError) {
      control.setErrors({'NoLanguage': true});
    } else {
      control.setErrors(null);

    }
  }

  submitForm(form: NgForm): void {
    this.validatePrimaryLanguage(form.controls['PrimaryLanguage']);
    if (this.hasPrimaryLanguageError) {
      return;
    } else {
      // submit the form
    }
  }
}
