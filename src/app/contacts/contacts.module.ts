import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ContactsComponent} from "./contacts.component";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {ContactDetailsComponent} from "../components/contact-details/contact-details.component";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ContactsComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
  ],
  providers: [],
  exports : [ContactDetailsComponent],
  bootstrap: [ContactsComponent]
})
export class ContactsModule {
}
