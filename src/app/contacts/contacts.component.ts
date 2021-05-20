import {Component, OnInit} from '@angular/core';
import data from '../utility/contacts.json';
import {ContactModel} from "../models/contact-model";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  staticContacts = data as Array<ContactModel>
  contacts = data as Array<ContactModel>;
  selectedContact: ContactModel | undefined;

  constructor() {
  }

  ngOnInit(): void {
    if (this.contacts.length > 0) {
      this.selectedContact = this.contacts[0];
    }
    console.log(this.selectedContact);
  }

  openContactDetails(contact: ContactModel) {
    this.selectedContact = contact;
  }

  searchContact(query: string) {
    const lowercase = this.formatString(query);
    this.contacts = this.staticContacts.filter(x => {
      return x.firstName?.toLowerCase().includes(lowercase) || x.lastName?.toLowerCase().includes(lowercase) ||
        (x.firstName + x.lastName).toLowerCase().includes(lowercase) ||
        (x.lastName + x.firstName).toLowerCase().includes(lowercase) || x.cellNumber?.includes(lowercase);
    });
  }

  formatString(query: string): string {
    return (query?.toLowerCase()).replace(/\s/g, "");
  }

}
