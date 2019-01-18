import { PaymentType } from '../enums/paymentType.enum';

export class Employee {
  constructor(public firstName: string,
              public lastName: string,
              public isFullTime: boolean,
              public paymentType: PaymentType,
              public primaryLanguage: string,
              public email: string) {}
}
