import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactsComponent} from "./contacts/contacts.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [

  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch : 'full'
  },
  {
    path: '**',
    redirectTo: 'contacts',
    pathMatch : 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
