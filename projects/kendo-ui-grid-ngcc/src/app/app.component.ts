import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: Employee[];
  public pageSize = 100;
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.data = this.createRandomData(1000);
    this.createFormGroup = this.createFormGroup.bind(this);
  }

  public createFormGroup(args: any): FormGroup {
    const item = args.isNew ? new Employee() : args.dataItem;

    this.formGroup = this.formBuilder.group({
      id: item.id,
      firstName: [item.firstName, Validators.required],
      lastName: [item.lastName, Validators.required],
      title: item.title,
      city: item.city
    });

    return this.formGroup;
  }

  /* Generating example data */
  private createRandomData(count: number): any[] {
    const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Nige'];
    const lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth', 'White'];
    const cities = ['Seattle', 'Tacoma', 'Kirkland', 'Redmond', 'London', 'Philadelphia', 'New York', 'Seattle', 'London', 'Boston'];
    const titles = ['Accountant', 'Vice President, Sales', 'Sales Representative', 'Technical Support', 'Sales Manager', 'Web Designer',
      'Software Developer'];

    return Array(count).fill({}).map((_, idx) => ({
      id: idx + 1,
      firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
      lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
      city: cities[Math.floor(Math.random() * cities.length)],
      title: titles[Math.floor(Math.random() * titles.length)]
    })
    );
  }
}
