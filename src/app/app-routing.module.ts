import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import{AddRestoComponent} from './add-resto/add-resto.component'
import { ItemComponent } from './item/item.component';
import{ListRestoComponent} from './list-resto/list-resto.component'
import { RegisterComponent } from './register/register.component';
import{UpdateRestoComponent} from'./update-resto/update-resto.component'
const routes: Routes = [
  {
    component: AddRestoComponent,
    path:'add'
  },
  {
    component: UpdateRestoComponent,
    path:'update/:Id'
  },
  {
    component: ListRestoComponent,
    path:''
  },
  {
    component: RegisterComponent,
    path:'Register'
  },
  {
    component:ItemComponent,
    path:'item'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
