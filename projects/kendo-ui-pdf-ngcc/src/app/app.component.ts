import { Component } from '@angular/core';

class InvoiceRow {
  public get total(): number {
    return this.unitPrice * this.qty;
  }

  constructor(
    public productName: string,
    public unitPrice: number,
    public qty: number
  ) {}
}

const invoiceData = [
  new InvoiceRow('QUESO CABRALES', 21, 5),
  new InvoiceRow('ALICE MUTTON', 39, 7),
  new InvoiceRow('GENEN SHOUYU', 15.50, 3),
  new InvoiceRow('CHARTREUSE VERTE', 18, 1),
  new InvoiceRow('MASCARPONE FABIOLI', 32, 2),
  new InvoiceRow('VALKOINEN SUKLAA', 16.25, 3)
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public data: InvoiceRow[] = [...invoiceData, ...invoiceData, ...invoiceData];
}
