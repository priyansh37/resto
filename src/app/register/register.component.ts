import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UserList } from '../user-list'
import {RestoService} from '../resto.service'
import {FormGroup,FormsModule} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // constructor() { }

  // ngOnInit(): void {
  // }
  
  userList = new UserList();
  sumbitted = false;
  constructor( private resto:RestoService){}
  onSumbit()
  {
    console.warn(this.userList)
    this.sumbitted =true;
    this.resto.registerUser(this.userList).subscribe((result)=>{
      console.warn("result here",result)
    }) 
}
  
  getCurrentModel(){
    return JSON.stringify(this.userList);
  }

}
