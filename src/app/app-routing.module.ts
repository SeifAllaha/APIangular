import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ListComponent } from './studnet/list/list.component';
import { AddComponent } from './studnet/add/add.component';
import { EditComponent } from './studnet/edit/edit.component';

import { DlistComponent } from './doctor/dlist/dlist.component';
import { DaddComponent } from './doctor/dadd/dadd.component';
import { DeditComponent } from './doctor/dedit/dedit.component';



const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'home', component : HomeComponent},
  {path:'studnet/list' , component : ListComponent},
  {path: 'studnet/add' , component: AddComponent},
  {path : 'studnet/edit/:id' , component : EditComponent},
  // doctor
  {path :'doctor/list' , component: DlistComponent},
  {path:'doctor/add' , component : DaddComponent},
  {path : 'doctor/edit/:id ' , component : DeditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
