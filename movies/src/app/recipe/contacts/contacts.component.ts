import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  send(username:string,email:string,message:string){
    username = '';
    email = '';
    message = '';
  }
}
