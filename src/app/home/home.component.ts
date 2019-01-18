import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { PaymentType } from '../enums/paymentType.enum';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public paymentTypeSalary = PaymentType.Salary;
  public paymentTypeDayRate = PaymentType.DayRate;
  public dateHired: Date;
  public languages = ['English', 'German', 'Spanish', 'Russian'];
  public model = new Employee('James', 'Bond', true, PaymentType.DayRate, 'German');

  constructor() { }

  ngOnInit() {

  }

  firstNameToUpperCase(input: string): void {
    if (input.length > 0) {
      this.model.firstName = input.charAt(0).toUpperCase() + input.toLowerCase().slice(1);
    } else {
      this.model.firstName = input;
    }
  }
}
