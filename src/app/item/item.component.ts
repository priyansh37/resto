import { Component, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: '.app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() @Output() item: Item;
  constructor() {}  
  getTotal(){
    if (this.item)
    this.item.amount = Number(this.item.price) * Number( this.item.quantity);
  }
}