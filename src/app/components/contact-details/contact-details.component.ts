import {Component, Input, OnInit} from '@angular/core';
import {ContactModel} from "../../models/contact-model";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  @Input() contact : ContactModel | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
