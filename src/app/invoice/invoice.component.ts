import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  constructor(private resto:RestoService) {}
  invoiceItems: any[] = [];
  total = 0;
  ngOnInit(): void {}
  add() {
    this.invoiceItems.push({});
  }
  getTotal() {
    this.total = 0;
    this.invoiceItems.forEach((item) => {
      this.total += item.amount;
    });
  }
  upload(){
    this.resto.uploadData(this.invoiceItems);
    console.log(this.invoiceItems)
  }

}
