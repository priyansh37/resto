import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css'],
})
export class UpdateRestoComponent implements OnInit {
  alert: boolean = false;
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(private router: ActivatedRoute, private resto: RestoService) {}

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.Id)
    this.resto.getCurrentResto(this.router.snapshot.params.Id).
        subscribe((result) => {
        this.editResto = new FormGroup({
          name: new FormControl(result['name']),
          email: new FormControl(result['email']),
          address: new FormControl(result['address'])
        })
      })
  }
  collection() {
    console.warn(this.editResto.value);
    this.resto
      .updateResto(this.router.snapshot.params.Id, this.editResto.value)
      .subscribe((result) => this.alert = true)
    
  }
  closeAlert() {
    this.alert = false;
  }
}
