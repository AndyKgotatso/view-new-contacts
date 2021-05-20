import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AboutComponent} from "./about.component";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AboutComponent]
})
export class AboutModule {
}
